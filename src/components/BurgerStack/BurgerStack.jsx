const BurgerStack = (props) => {
    return(
        <>
        
        <ul>
        <h2>{props.title}</h2>
            {props.ingredients.map((ingredient) => (
                <li style={ {backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={()=> props.handleRemoveIngredients(ingredient)}>x</button>
                </li>
            ))}
        </ul>
        </>
    )
};

export default BurgerStack;