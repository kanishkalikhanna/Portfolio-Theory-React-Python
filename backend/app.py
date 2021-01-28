from flask import Flask, request
from optimal_portfolio_calculator import OptimalPortfolioCalculator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
# route for calculating optimal portfolio
def optimal_portfolio():
    optimal_portfolio_calculator = OptimalPortfolioCalculator(request)
    result = optimal_portfolio_calculator.find_optimal_portfolio()
    return result


if __name__ == "__main__":
    app.run(debug=True)
