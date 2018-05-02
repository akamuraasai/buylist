import React from 'react';

import Topbar from './base/Layout/Topbar';
import Header from './base/Layout/Header';
import ProductList from './base/Collection/ProductList';

const items = [
  { id: 1, unitType: 'kg', name: 'Tomate', price: 3.99, units: 1, completed: false },
  { id: 2, unitType: 'kg', name: 'Cebola', price: 1.99, units: 2.3, completed: false },
  { id: 3, unitType: 'kg', name: 'Alho', price: 4.99, units: 0.4, completed: true },
  { id: 4, unitType: 'un', name: 'Leite', price: 2.49, units: 12, completed: false },
  { id: 5, unitType: 'un', name: 'Bolacha', price: 1.29, units: 5, completed: false },
  { id: 6, unitType: 'kg', name: 'Carne', price: 23.99, units: 0.9, completed: false },
  { id: 7, unitType: 'kg', name: 'Frango', price: 7.99, units: 2.3, completed: true },
  { id: 8, unitType: 'un', name: 'Margarina', price: 4.49, units: 1, completed: false },
];

const App = () => (
  <div>
    <Topbar />
    <Header products={items} />
    <ProductList products={items} />
  </div>
);

export default App;
