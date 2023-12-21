// Define an object to store the currency unit and amount
const CURRENCY_UNIT = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  };
  
  // Define a function to format the currency
  function formatCurrency(amount) {
    // Convert the amount to a number
    amount = Number(amount);
    // Round the amount to two decimal places
    amount = amount.toFixed(2);
    // Format the amount as a string with a dollar sign and a comma separator
    amount = "$" + amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Return the formatted amount
    return amount;
  }
  
  // Define a function to check cash register status
  function checkCashRegister(price, cash, cid) {
    // Calculate the change due in cents
    let change = cash * 100 - price * 100;
    // Calculate the total cash in drawer in cents
    let totalCid = 0;
    for (let element of cid) {
      totalCid += element[1] * 100;
    }
    // Compare the total cash with the change due
    if (totalCid < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCid === change) {
      return {status: "CLOSED", change: cid};
    } else {
      // Create an array to store the change breakdown
      let changeBreakdown = [];
      // Loop through the currency units
      for (let i = cid.length - 1; i >= 0; i--) {
        // Store the currency unit and amount
        let currencyUnit = cid[i][0];
        let currencyAmount = cid[i][1] * 100;
        // Store the currency unit and change given
        let currencyChange = 0;
        // While there is still change due and currency in drawer
        while (change >= CURRENCY_UNIT[currencyUnit] && currencyAmount > 0) {
          // Deduct the currency amount from the change due
          change -= CURRENCY_UNIT[currencyUnit];
          // Deduct the currency amount from the currency in drawer
          currencyAmount -= CURRENCY_UNIT[currencyUnit];
          // Add the currency amount to the change given
          currencyChange += CURRENCY_UNIT[currencyUnit];
        }
        // If any change was given in this currency unit
        if (currencyChange > 0) {
          // Add the currency unit and change given to the change breakdown
          changeBreakdown.push([currencyUnit, currencyChange / 100]);
        }
      }
      // If there is still change due after looping through all currency units
      if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      } else {
        // Format the change breakdown
        for (let i = 0; i < changeBreakdown.length; i++) {
          changeBreakdown[i][1] = formatCurrency(changeBreakdown[i][1]);
        }
        // Return the change breakdown
        return {status: "OPEN", change: changeBreakdown};
      }
    }
  }
  