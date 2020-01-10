const Person = function(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
  this.favoriteNumber = 4;
  this.multiplyFavoriteNumber = (num) => num * this.favoriteNumber;
}

const jim = new Person("Jim", "Filmore", "blue", "Fish");

console.log(jim.favoriteFood);

console.log(jim.multiplyFavoriteNumber(4));

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, [firstName, lastName, favoriteColor, favoriteFood])
}

const boy = new Child("Sam", "Bag", "Yelow", "Gari");
console.log(boy.favoriteFood);