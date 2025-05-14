// src/App.jsx
import './App.css';
import { useState } from 'react'
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [burgerStack, setBurgerStack] = useState(availableIngredients);

  const [userBurger, setUserBurger] = useState([])

  const handleAddIngredients = (ingredient) => {
    setUserBurger([...userBurger, ingredient])
  }

  const handleRemoveIngredients = (ingredient) => {
    setBurgerStack([...userBurger, ingredient])
    setUserBurger(userBurger.filter((element) => element.name !== ingredient.name))
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList title= 'Available Ingredients' ingredients = {availableIngredients} handleAddIngredients={handleAddIngredients}/>
        <BurgerStack title= 'User Burger' ingredients = {userBurger} handleRemoveIngredients={handleRemoveIngredients}/>
      </section>
    </main>
  );
};

export default App;
