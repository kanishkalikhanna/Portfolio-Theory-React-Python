import pandas_datareader.data as web
from scipy.optimize import minimize
from utils import *


class OptimalPortfolioCalculator:

    def __init__(self, request):
        self.data = request.get_json()
        self.portfolio_type = request.args.get('type')
        self.short_sales_possible = request.args.get('shortSalesPossible')
        self.covariance_matrix = None
        self.mean_daily_returns = None
        self.n = 0

    def find_optimal_portfolio(self):

        tickers = []
        for item in list(self.data):
            tickers.append(item['ticker'])

        self.n = len(tickers)

        # downloading daily price data for each of the stocks in the portfolio
        stock_data = web.DataReader(tickers, data_source='yahoo')['Adj Close']

        # convert daily stock prices into daily holding period returns
        daily_hpr = stock_data.pct_change()

        # calculate mean daily holding period returns
        self.mean_daily_returns = daily_hpr.mean()

        # calculate covariance matrix of daily returns between securities
        self.covariance_matrix = daily_hpr.cov()

        optimal_solution = self.optimize()
        optimal_weights = optimal_solution.x
        json_mvp_results = get_json_results(optimal_weights, tickers)

        return json_mvp_results

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
