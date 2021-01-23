from random import randint


def find_mvp(tickers):
    total = 0
    stock_proportions = {}

    for ticker in tickers:
        rnd_num = randint(1, 100)
        stock_proportions[ticker] = (rnd_num * 100)
        total += rnd_num

    for ticker in tickers:
        stock_proportions[ticker] = str(stock_proportions[ticker] / total) + "%"

    result = []

    for ticker, proportion in stock_proportions.items():
        result.append(
            {
                "ticker": ticker,
                "proportion": proportion
            }
        )

    return result



