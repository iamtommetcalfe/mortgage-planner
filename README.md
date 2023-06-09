# Mortgage Planner

![Landing page of Mortgage Planner (Landing page of Mortgage Planner)](src/assets/images/example.png)


## Project setup
```
npm install
```

Create .env file and populate with the following variables. Replace the values as you need to:
* VUE_APP_DEFAULT_CURRENCY = GBP

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Components

### Average Mortgage Rate Graph
This uses the Bank of England to download a CSV of rates. The specific rate used for this graph is the monthly interest rate of UK monetary financial institutions (excl. Central Bank) sterling 5 year (90% LTV) fixed rate mortgage to households (in percent) not seasonally adjusted.

### Monthly Repayment Calculator
To calculate the monthly mortgage payment based on the interest rate, loan amount, and number of years to repay the loan, you can use the following formula:

M = P * (r/12) * (1 + r/12)^n / ((1 + r/12)^n - 1)

Where:
M = Monthly mortgage payment
P = Loan amount
r = Monthly interest rate (annual interest rate divided by 12)
n = Total number of payments (number of years to repay * 12)

For example, let's say you're taking out a £300,000 loan with a 3.5% annual interest rate to be paid off over 30 years. First, calculate the monthly interest rate:

r = 0.035 / 12 = 0.0029167

Next, calculate the total number of payments:

n = 30 * 12 = 360

Finally, plug these values into the formula:

M = 300000 * (0.0029167) * (1 + 0.0029167)^360 / ((1 + 0.0029167)^360 - 1)

M = £1,347.13
