// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + subtotal * taxRate) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}

console.log(calculateInvoice(100, 0.08, 5)); 
console.log(calculateInvoice(500, 0.1, 20)); 
// Task 2: Function Expression - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

console.log(calculateHourlyWage(52000, 40)); 
console.log(calculateHourlyWage(75000, 35)); 
// Task 3: Arrow Function - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0;
    if (years >= 5) discountRate = 0.15;
    else if (years >= 3) discountRate = 0.1;
    else discountRate = 0.05;

    let discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

console.log(calculateLoyaltyDiscount(100, 6)); 
console.log(calculateLoyaltyDiscount(200, 2)); 
// Task 4: Parameters and Arguments - Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = 0;
    if (location === "USA") baseCost = 5 + 0.5 * weight;
    else if (location === "Canada") baseCost = 10 + 0.7 * weight;

    if (expedited) baseCost += 10;

    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}

console.log(calculateShippingCost(10, "USA", true)); 
console.log(calculateShippingCost(5, "Canada", false)); 