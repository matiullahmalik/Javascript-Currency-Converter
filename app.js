const exchangeRates = {
    USD: { EUR: 0.85, PKR: 280, INR: 75, GBP: 0.75, AED: 3.67, SAR: 3.75, CNY: 6.45, JPY: 110 },
    EUR: { USD: 1.18, PKR: 310, INR: 88, GBP: 0.88, AED: 4.31, SAR: 4.41, CNY: 7.60, JPY: 130 },
    PKR: { USD: 0.0036, EUR: 0.003, INR: 0.24, GBP: 0.0027, AED: 0.013, SAR: 0.012, CNY: 0.019, JPY: 0.33 },
    INR: { USD: 0.013, EUR: 0.011, PKR: 4.15, GBP: 0.011, AED: 0.057, SAR: 0.056, CNY: 0.22, JPY: 1.45 },
    GBP: { USD: 1.33, EUR: 1.14, PKR: 370, INR: 88.80, AED: 4.92, SAR: 5.00, CNY: 8.60, JPY: 150 },
    AED: { USD: 0.27, EUR: 0.23, PKR: 75, INR: 18, GBP: 0.20, SAR: 1.00, CNY: 1.50, JPY: 27 },
    SAR: { USD: 0.27, EUR: 0.23, PKR: 75, INR: 18, GBP: 0.20, AED: 1.00, CNY: 1.50, JPY: 27 },
    CNY: { USD: 0.15, EUR: 0.13, PKR: 52, INR: 4.50, GBP: 0.12, AED: 0.67, SAR: 0.67, JPY: 15 },
    JPY: { USD: 0.0091, EUR: 0.0077, PKR: 3.00, INR: 0.69, GBP: 0.0067, AED: 0.037, SAR: 0.037, CNY: 0.067 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;
    let result;

    if (currencyFrom === currencyTo) {
        result = amount; // No conversion needed
    } else {
        const rate = exchangeRates[currencyFrom][currencyTo];
        result = amount * rate;
    }

    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${currencyTo}`;
}
