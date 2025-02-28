from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def home():
    return {"message": "Welcome to the Finance API!"}

@app.get("/api/portfolio")
def get_portfolio():

    totalVal = 18662.6

    portfolio_data = [
        {"asset": "SPY: S&P 500", "symbol": "SPY", "weight": 585.5/totalVal, "category": "ETF"},

        {"asset": "AMD: Advanced Micro Devices", "symbol": "AMD", "weight": 2513.63/totalVal, "category": "Equities"},
        {"asset": "AMZN: Amazon", "symbol": "AMZN", "weight": 1461.18/totalVal, "category": "Equities"},
        {"asset": "ASML: Advanced Semiconductor Materials Lithography", "symbol": "ASML", "weight": 700.89/totalVal, "category": "Equities"},
        {"asset": "COST: Costco", "symbol": "COST", "weight": 1271.67/totalVal, "category": "Equities"},
        {"asset": "CRM: Salesforce", "symbol": "CRM", "weight": 1279.85/totalVal, "category": "Equities"},
        {"asset": "GOOGL: Google", "symbol": "GOOGL", "weight": 2203.51/totalVal, "category": "Equities"},
        {"asset": "JPM: J.P. Morgan Chase", "symbol": "JPM", "weight": 917.55/totalVal, "category": "Equities"},
        {"asset": "META: Meta", "symbol": "META", "weight": 2420.20/totalVal, "category": "Equities"},
        {"asset": "NIKE: Nike", "symbol": "NIKE", "weight": 2402.28/totalVal, "category": "Equities"},
        {"asset": "TXRH: Texas Roadhouse", "symbol": "TXRH", "weight": 1006.19/totalVal, "category": "Equities"},
        {"asset": "UBER: Uber", "symbol": "UBER", "weight": 1478.20/totalVal, "category": "Equities"},


        {"asset": "BTC: Bitcoin", "symbol": "BTC", "weight": 425.72/totalVal, "category": "Crypto"},
        
        
    ]
    return {"portfolio": portfolio_data}
