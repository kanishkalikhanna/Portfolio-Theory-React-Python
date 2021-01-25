from flask import Flask, request
from optimal_portfolio_calculator import find_optimal_portfolio
from flask_cors import CORS
from json import dumps

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
# route for calculating optimal portfolio
def optimal_portfolio():
    data = request.get_json()
    portfolio_type = request.args.get('type')
    result = find_optimal_portfolio(data, portfolio_type)
    return dumps(result)
