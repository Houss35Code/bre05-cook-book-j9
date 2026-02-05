function IngredientsList({ ingredients }) {
  return (
    <div className="ingredients-card">
      <h3>Ingrédients</h3>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;