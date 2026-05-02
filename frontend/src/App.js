import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/menu')
      .then(res => setMenu(res.data));
    axios.get('http://localhost:3001/orders')
      .then(res => setOrders(res.data));
  }, []);

  const placeOrder = (item) => {
    axios.post('http://localhost:3001/orders', item)
      .then(res => setOrders([...orders, res.data]));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="App">
      <h1>🍕 QuickBite</h1>
      
      <h2>Menu</h2>
      <div className="menu">
        {menu.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => placeOrder(item)}>
              Order
            </button>
          </div>
        ))}
      </div>

      <h2>My Orders</h2>
      <div className="orders">
        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map(order => (
            <div key={order.id} className="order-item">
              <p>{order.name} - ${order.price}</p>
              <button onClick={() => deleteOrder(order.id)}>
                Cancel
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;