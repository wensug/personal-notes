# ThirdCoding Assignment
    Write a client-side web application in JavaScript (or typescript if preferred) with associated unit tests, that can price a
    basket of goods in a number of different currencies
    The goods that can be purchased, which are all priced in USD, are:
    • Soup – $0.65 per tin
    • Bread – $0.80 per loaf
    • Milk – $1.15 per bottle
    • Apples – $1.00 per bag

# Requirements:
    1. The program should allow the user to add or remove items in a basket.
    2. The user can click on a checkout button which will then display the total price for the basket with the option to
    display the amount in different currencies.
    For example, if the basket contained 2x Apples, with the currency selected being “EUR” and an exchange rate of
    0.85, the total would be €1.70.
    3. No UI design constraints are enforced so feel free to design and style the UI in the way you see as most appropriate
    for the solution.
    4. To convert to other currencies, you should create a (free) account on currencylayer.com:
    https://currencylayer.com/product. This will then issue you with an API Key that permits reading from the various
    public APIs listed on that site. (Note that the free tier API only allows conversion where the source currency is USD,
    which is entirely suitable for this assignment and is why we’ve used USD in the above examples)
    Your application should use the latest exchange rate for the selected currency by calling the currencyLayer API’s.
    5. To display a list of currencies to the user your application must call the CurrencyLayer endpoint at
    https://apilayer.net/api/list (which returns details of available currencies) and use the results as you see
    fit.

# Installation 
  - Open a terminal
  - git clone git@github.com:wensug/shopping-cart.git
  - `npm install`
  - `npm run start` 

# Instructions
  - Please open http://localhost:3000/ to find out the solution. 