import React, { useState, useEffect } from 'react';
import './App.css';
import productsData from './fake-data/all-products.js';
import categoriesData from './fake-data/all-categories.js';
import CategoryList from './components/CategoryList.jsx';
import ProductList from './components/ProductList.jsx';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? productsData.filter(product => product.categoryIds.includes(selectedCategory))
    : productsData;

  return (
    <div className="App">
      <CategoryList categories={categoriesData} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
