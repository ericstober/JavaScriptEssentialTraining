/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const arr = ["pen", "notebook", "mouse", "keyboard", "desk", "phone", "tape", "calculator"];
console.log("Original array: ", arr.join(", "));

//remove the last time
// arr.pop(); 
// console.log("Last item removed: ", arr.join(", "));

//add the last item as the first item on the array
arr.unshift(arr.pop());
console.log("Last item moved to front: ", arr.join(", "));

//sort the items by alphabetical order
arr.sort()
console.log("Sorted alphabetically: ", arr.join(", "));

//use the find() method to find a specific item in the array
const foundItem = arr.find(item => item === "keyboard");
console.log("Found item: ", foundItem);

//Remove the item you found using the find method from the array
let remove = "tape";
arr.splice(arr.indexOf(remove), 1);
console.log('Removed "$(remove)": ', arr);