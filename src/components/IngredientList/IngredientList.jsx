const IngredientList = (props) => {
  return (
    <>
      <ul>
        <h2>{props.title}</h2>
        {props.ingredients.map((ingredient) => (
          <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={()=>props.handleAddIngredients(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
