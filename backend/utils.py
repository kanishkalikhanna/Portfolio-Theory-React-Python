import numpy as np


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
