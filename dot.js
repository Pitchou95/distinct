function dotProduct(v1, v2) {
let ps = 0; // Initialize the dot product to zero
for (let i = 0; i < v1.length; i++) { // Iterate through the vector components
ps += (v1[i] * v2[i]); // Calculate the dot product by multiplying the corresponding components and summing them up
}
return ps; // Return the dot product
}

function checkOrthogonality() {
let n = parseInt(prompt("Enter the number of pairs of vectors:")); // Read the number of pairs of vectors from the input
let v1 = new Array(n); // Declare an array of size n to store the first vectors of each pair
let v2 = new Array(n); // Declare an array of size n to store the second vectors of each pair
let ps; // Declare a variable to store the dot product
for (let i = 0; i < n; i++) { // Iterate through the pairs of vectors
v1[i] = parseInt(prompt("Enter the first vector of pair " + (i+1) + ":")); // Read the first vector of the pair from the input
v2[i] = parseInt(prompt("Enter the second vector of pair " + (i+1) + ":")); // Read the second vector of the pair from the input
ps = dotProduct(v1[i], v2[i]); // Calculate the dot product of the vectors using the dotProduct function
if (ps === 0) { // Check if the dot product is zero
console.log("The given vectors v1 and v2 are orthogonal"); // Display the result if the vectors are orthogonal
} else {
console.log("The given vectors v1 and v2 are not orthogonal"); // Display the result if the vectors are not orthogonal
}
}
}