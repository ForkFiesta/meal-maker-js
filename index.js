
// creating menu object with private properties

menu = {

    _meal : '',
    _price : 0,

    set meal(mealToCheck){

        if (typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
    },

    set price(priceToCheck){

        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }
        

    },

    get todaysSpecial(){

        if (this._meal && this._price){
            return `Today's Special is ${this._meal} for ${this._price}.`;
        
        }
        else{
            return "Meal or price was not set correctly";
        }

        
    }

}
// create an array of items for the menu
const foodArray = ['hamburger', 'spaghetti', 'tacos', 'sandwich', 'steak'];
// declare and assign a variable an index number of the array
let randomFoodIndex = Math.floor(Math.random()* foodArray.length);
// declare and assign a variable representing a random price between 1 and 20
let randPrice = Math.floor(Math.random() * 20);
// sets the food
menu.meal = foodArray[randomFoodIndex];
// sets the price
menu.price = randPrice;

//gets the food and price
console.log(menu.todaysSpecial)

