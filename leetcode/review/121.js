var maxProfit = function (prices) {
    let lowest = prices[0]
    let absoluteMaxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
        }
        absoluteMaxProfit = Math.max(absoluteMaxProfit, prices[i] - lowest)
    }
    return absoluteMaxProfit
};
