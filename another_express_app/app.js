const express = require("express");
const bodyParser = require('body-parser'); 

const app = express();

const shoppingList = [
  {
    "id": 1,
    "name": "Eggs",
    "price": "5.99"
  },
  {
    "id": 2,
    "name": "Eggs2",
    "price": "5.99"
  },
  {
    "id": 3,
    "name": "Eggs3",
    "price": "5.99"
  },
];

var id = 4;

app.use(bodyParser.json()); 

app.get("/items", (req, res) => {
  let str = shoppingList.map(obj => `Item name: ${obj.name}, Price: ${obj.price}`).join("\n");
  return res.send(str);
});

app.post("/items", (req, res) => {
  var item = req.body;
  shoppingList.push({...item, "id": id});
  res.send("Item added to list")
});

app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const item = shoppingList.find(val => val.id == id);
  const str = `Item name: ${item.name}, Price: ${item.price}`
  return res.send(str);
});

app.patch("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = shoppingList.findIndex(val => val.id == id);
  shoppingList[itemIndex].name = req.body.name;
  shoppingList[itemIndex].price = req.body.price;
  res.send("Item edited");
});  

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = shoppingList.findIndex(val => val.id == id);
  shoppingList.splice(itemIndex, 1);
  res.send("Item deleted");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});