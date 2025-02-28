from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to the Finance API!"}

@app.get("/api/portfolio")
def get_portfolio():
    portfolio_data = [
        {"asset": "S&P 500 ETF", "weight": 50, "category": "Stocks"},
        {"asset": "Bitcoin", "weight": 20, "category": "Crypto"},
        {"asset": "Gold", "weight": 15, "category": "Commodities"},
        {"asset": "Treasury Bonds", "weight": 15, "category": "Bonds"}
    ]
    return {"portfolio": portfolio_data}
