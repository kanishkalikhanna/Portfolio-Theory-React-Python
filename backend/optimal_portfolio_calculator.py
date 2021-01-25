import pandas_datareader.data as web
import numpy as np
from scipy.optimize import minimize


def calc_annual_expected_return(mean_daily_returns, weights):
    daily_expected_returns = np.sum(mean_daily_returns * weights)
    annual_return = daily_expected_returns * 252
    return annual_return


def calc_annual_volatility(weights, covariance_matrix):
    weights_transposed = weights.T
    cov_matrix_times_weights = np.dot(covariance_matrix, weights)
    daily_volatility = np.sqrt(np.dot(weights_transposed, cov_matrix_times_weights))
    annual_volatility = daily_volatility * np.sqrt(252)
    return annual_volatility


def get_json_results(optimal_weights, tickers):
    list_mvp = list(optimal_weights)
    n = len(tickers)
    json_results = []

    for i in range(n):
        percentage_proportion = str(round(list_mvp[i] * 100, 1)) + "%"
        json_results.append(
            {
                "ticker": tickers[i],
                "proportion": percentage_proportion
            }
        )
    return json_results


def find_optimal_portfolio(data, portfolio_type):

    tickers = []
    for item in data:
        tickers.append(item['ticker'])

    n = len(tickers)
    tickers.sort()

    # downloading daily price data for each of the stocks in the portfolio
    data = web.DataReader(tickers, data_source='yahoo')['Adj Close']

    # convert daily stock prices into daily holding period returns
    daily_hpr = data.pct_change()

    # calculate mean daily holding period returns and covariance matrix of daily returns between securities
    mean_daily_returns = daily_hpr.mean()
    covariance_matrix = daily_hpr.cov()

    def objective_mvp(weights):
        return calc_annual_volatility(weights, covariance_matrix)

    def objective_orp(weights):
        reward = calc_annual_expected_return(mean_daily_returns, weights)
        risk = calc_annual_volatility(weights, covariance_matrix)
        return -1 * reward / risk

    def constraint(weights):
        return 1 - sum(weights)

    start_weights = np.array(np.random.random(n))
    optimal_solution = None

    if portfolio_type == "mvp":
        optimal_solution = minimize(objective_mvp, start_weights, method="SLSQP",
                                    constraints={'type': 'eq', 'fun': constraint})
    elif portfolio_type == "orp":
        optimal_solution = minimize(objective_orp, start_weights, method="SLSQP",
                                    constraints={'type': 'eq', 'fun': constraint})

    optimal_weights = optimal_solution.x

    json_mvp_results = get_json_results(optimal_weights, tickers)

    print(optimal_solution)

    return json_mvp_results
