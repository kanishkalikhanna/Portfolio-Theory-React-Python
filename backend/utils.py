import numpy as np
from json import dumps


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


def get_json_results(attributes, values):

    json_results = []

    for attribute, value in zip(attributes, values):
        print(attribute, value)
        if attribute != "Sharpe Ratio":
            value = str(round(value * 100, 1)) + "%"
        else:
            value = round(value, 3)

        json_results.append(
            {
                "attribute": attribute,
                "value": value
            }
        )
    return dumps(json_results)
