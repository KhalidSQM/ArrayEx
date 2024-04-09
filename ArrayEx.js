const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

// Map Method
const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

// Foreach Method
let mainCourseItems = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItems += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItems;

// For Loop
let dessertItems = ""
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
    document.getElementById("dessertMenuItems").innerHTML = dessertItems;
}
