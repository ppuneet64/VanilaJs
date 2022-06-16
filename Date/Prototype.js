/**
 * Add Number of days in Specific Date
 * @param {number} days 
 * @returns 
 */
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

// Add 7 Days
const date = new Date('2022-06-10');

console.log(date.addDays(30).toString());