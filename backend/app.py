from flask import Flask, request
from mvp_calculator import find_mvp
from json import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/mvp', methods=['POST'])
def mvp():
    data = list(request.get_json())
    tickers = []

    for item in data:
        tickers.append(item['ticker'])

    result = find_mvp(tickers)
    return dumps(result)
