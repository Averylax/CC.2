// Task 1 - Store Inventory
let products = ["laptop", "mouse", "keyboard", "monitor", "printer"]; // Array of products
products.push("headset"); // Adding Headset to the list
products.pop(); // Removes last elemnet from the list - headset
console.log("Updated Product List:", products);
// Task 1 - Store Inventory

// Task 2 - Student Grades
let scores = [70, 85, 90, 95, 92]; // Array of scores
scores[1] = 80; // Updating the score of the second student to 80
let total = scores.reduce((sum, score) => sum + score, 0); // Sum of all scores in the array
let average = total / scores.length; // Average of all scores - scores.length is the number of students, 5
console.log("Updated Scores:", scores); // Updated Scores
console.log("Average Score:", average.toFixed(2)); // Average Score rounded to 2 decimal places
// Task 2 - Student Grades

// Task 3 - Employee Records
let employee = {
    name: "First Name", // Name of the employee
    age: 25, // Age of the employee
    department: "Sales", // Department of the employee
    isActive: true // Status of the employee
};
employee.department = "Marketing"; // Updating the department of the employee to Marketing
employee.position = "Manager"; // Adding a new property to the employee object
console.log("Updated Employee Record:", employee); // Updated Employee Record
// Task 3 - Employee Records

// Task 4 - Customer Database
let customers = [ 
    {name: "Avery White", email: "avery.white@gmail.com", purchaseAmount: 100},
    {name: "Brady Deschenes", email: "brady.deschnenes@gmail.com", purchaseAmount: 50},
    {name: "Colin Long", email: "colin.long@gmail.com", purchaseAmount: 75},
];
customers.push({name: "Hunter Leonard", email: "hunter.leonard", purchaseAmount: 150}); // Adding a new customer to the list
console.log("Updated Customer List:", customers); // Updated Customer List
// Task 4 - Customer Database

// Task 5 - Ordering Process System
let order = {
    orderId: 1337, // Order ID
    customerName: "Tom Brady", // Customer Name
    amount: 200, // Amount of the order
    calculateTax: function () {
    return this.amount * 0.1; // Calculating the tax amount
    }
};
console.log("Order Details:", order); // Order Details
console.log("Tax Amount:", order.calculateTax().toFixed(2)); // Tax Amount
// Task 5 - Ordering Process System
