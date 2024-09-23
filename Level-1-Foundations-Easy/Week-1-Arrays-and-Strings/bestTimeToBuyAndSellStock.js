function maxProfit(prices) {
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= minPrice) {
      const profit = prices[i] - minPrice;
      if (profit > maxProfit) maxProfit = profit;
    } else minPrice = prices[i];
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
