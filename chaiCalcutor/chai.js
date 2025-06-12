let water=200;//.ml
let milk=50;//.ml
let teaLeaves=1;
let sugar=2;
function calculateChaiIngredients(){
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
     
    console.log("To make ${numberOfCups} cups of chai, you need:");
    console.log("Water:${totalWater} milliliters");
    console.log("Milk:${totalMilk} milliliters");
    console.log("Tea Leaves (Majani):${totalTeaLeaves} teaspoons");
    console.log("Sugar (sukari):${totalSugar} tablespoons");
    console.log("Enjoy your chai!");
}

const userInput = prompt("Karibu! How many cups of chai do you want to make?");
const numberOfCups = Number(userInput);
if (isNaN(numberOfCups) && numberOfCups > 0) {
    calculatechaiingredients(numberOfCups);
}else {
console.log("Tafadhali ingiza nambari halali ya vikombe vya chai.");
}