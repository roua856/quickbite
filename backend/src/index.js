const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const menu = [
  { id: 1, name: 'Pizza Margherita', price: 8.99 },
  { id: 2, name: 'Burger Classic', price: 6.99 },
  { id: 3, name: 'Pasta Carbonara', price: 7.99 },
  { id: 4, name: 'Caesar Salad', price: 5.99 },
];

let orders = [];

app.get('/menu', (req, res) => {
  res.json(menu);
});

app.post('/orders', (req, res) => {
  const order = { id: orders.length + 1, ...req.body };
  orders.push(order);
  res.json(order);
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});

module.exports = app;