// Define the object containing item names and their USD prices
const itemPrices = {
    "Item 1": 10,
    "Item 2": 25,
    "Item 3": 50,
    "Item 4": 100
  };
  
  // Define the exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Convert the prices to INR using the map higher-order function
  const itemPricesInRupees = Object.keys(itemPrices).map(item => {
    return {
      [item]: itemPrices[item] * exchangeRate
    };
  });
  
  // Output the converted prices
  console.log(itemPricesInRupees);
  