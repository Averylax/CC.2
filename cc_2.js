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