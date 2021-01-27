import pandas_datareader.data as web
from scipy.optimize import minimize
from utils import *


class OptimalPortfolioCalculator:

    def __init__(self, request):
        self.json_data = request.get_json()
        self.portfolio_type = request.args.get('type')
        self.short_sales_possible = request.args.get('shortSalesPossible')
        self.covariance_matrix = None
        self.mean_daily_returns = None
        self.tickers = [item['ticker'] for item in list(self.json_data)]
        self.tickers.sort()
        self.n = len(self.tickers)
        # downloading daily data for each of the stocks in the portfolio
        self.stock_data = web.DataReader(self.tickers, data_source='yahoo')['Adj Close']

    def find_optimal_portfolio(self):

        # convert daily stock prices into daily holding period returns
        daily_hpr = self.stock_data.pct_change()

        # calculate mean daily holding period returns
        self.mean_daily_returns = daily_hpr.mean()

        # calculate covariance matrix of daily returns between securities
        self.covariance_matrix = daily_hpr.cov()

        optimal_solution = self.optimize()
        optimal_weights = optimal_solution.x

        expected_return = calc_annual_expected_return(self.mean_daily_returns, optimal_weights)
        expected_volatility = calc_annual_volatility(optimal_weights, self.covariance_matrix)
        sharpe_ratio = expected_return / expected_volatility

        values = list(optimal_weights) + [expected_return, expected_volatility, sharpe_ratio]
        attributes = self.tickers + ["Expected Return", "Standard Deviation", "Sharpe Ratio"]
        json_portfolio_performance = get_json_results(attributes, values)

        return json_portfolio_performance

    def objective_mvp(self, weights):
        return calc_annual_volatility(weights, self.covariance_matrix)

    def objective_orp(self, weights):
        reward = calc_annual_expected_return(self.mean_daily_returns, weights)
        risk = calc_annual_volatility(weights, self.covariance_matrix)
        return -1 * reward / risk

    def optimize(self):

        start_weights = np.array(np.random.random(self.n))

        lower_bound = float('-inf') if self.short_sales_possible == "yes" else 0
        upper_bound = float('inf')
        bounds = [(lower_bound, upper_bound) for _ in range(self.n)]

        constraints = {'type': 'eq', 'fun': lambda weights: 1 - sum(weights)}

        if self.portfolio_type == "mvp":
            return minimize(self.objective_mvp, start_weights, method="SLSQP", constraints=constraints, bounds=bounds)
        elif self.portfolio_type == "orp":
            return minimize(self.objective_orp, start_weights, method="SLSQP", constraints=constraints, bounds=bounds)
