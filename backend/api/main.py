from flask import Flask
from urllib import request
from bs4 import BeautifulSoup
import datetime
import dateutil.relativedelta as dr
import pandas as pd
import json


def get_constituents():
    with open('../data/S&P500_Data') as f:
        data = []
        for line in f:
            ticker_and_security = line.split("report")[0]
            ticker, *security = ticker_and_security.split()
            security = ' '.join(security)
            display_string = security + " (" + ticker + ")"

            data.append(
                {
                    "ticker": ticker,
                    "security": security,
                    "description": display_string
                }
            )

    file_write = open("../data/new_file.txt", "w")
    json.dump(data, file_write)


get_constituents()
