import pandas_datareader.data as web
import numpy as np
import pandas as pd


def calc_annual_return(mean_daily_returns, weights):
    daily_average_returns = np.sum(mean_daily_returns * weights)
    annual_return = daily_average_returns * 252
    return annual_return


def calc_annual_volatility(weights, covariance_matrix):
    weights_transposed = weights.T
    cov_matrix_times_weights = np.dot(covariance_matrix, weights)
    daily_volatility = np.sqrt(np.dot(weights_transposed, cov_matrix_times_weights))
    annual_volatility = daily_volatility * np.sqrt(252)
    return annual_volatility


def get_json_results(mvp, tickers):
    list_mvp = list(mvp)
    n = len(tickers)
    json_results = []

    for i in range(n):
        percentage_proportion = str(round(list_mvp[i] * 100, 2)) + "%"
        json_results.append(
            {
                "ticker": tickers[i],
                "proportion": percentage_proportion
            }
        )
    return json_results


def monte_carlo_simulation(covariance_matrix, mean_daily_returns, n):

    num_simulations = 2000
    simulation_results = np.zeros((2 + n, num_simulations))

    for i in range(num_simulations):

        weights = np.array(np.random.random(n))

        # ensuring weights to sum to 1
        weights /= np.sum(weights)

        portfolio_return = calc_annual_return(mean_daily_returns, weights)
        portfolio_std_dev = calc_annual_volatility(weights, covariance_matrix)

        simulation_results[0, i] = portfolio_return
        simulation_results[1, i] = portfolio_std_dev

        for j in range(n):
            simulation_results[j + 2, i] = weights[j]

    return simulation_results


def find_mvp(tickers):
    n = len(tickers)
    tickers.sort()

    # downloading daily price data for each of the stocks in the portfolio
    data = web.DataReader(tickers, data_source='yahoo', start='01/01/2020')['Adj Close']

    # convert daily stock prices into daily holding period returns
    daily_hpr = data.pct_change()

    # calculate mean daily holding period returns and covariance matrix of daily returns between securities
    mean_daily_returns = daily_hpr.mean()
    covariance_matrix = daily_hpr.cov()

    simulation_results = monte_carlo_simulation(covariance_matrix, mean_daily_returns, n)

    # convert results array to Pandas DataFrame
    simulation_results_frame = pd.DataFrame(simulation_results.T, columns=['ret', 'stdev'] + tickers)

    # finding weights for the portfolio with minimum standard deviation
    mvp = simulation_results_frame.iloc[simulation_results_frame['stdev'].idxmin()]
    start_index = len(mvp) - n

    json_mvp_results = get_json_results(mvp[start_index:], tickers)

    return json_mvp_results
