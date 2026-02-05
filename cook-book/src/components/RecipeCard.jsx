function RecipeCard({ recipe, onSelect }) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <article className="recipe-card">
      <div className="card-image">
        <img src={recipe.image} alt={recipe.name} />
        <span className="badge">{recipe.cuisine}</span>
      </div>
      <div className="card-content">
        <h3>{recipe.name}</h3>
        <div className="card-meta">
          <span>⏱ {totalTime} min</span>
          <span>🔥 {recipe.caloriesPerServing} kcal</span>
        </div>
        <div className="card-footer">
          <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>
            {recipe.difficulty}
          </span>
          <button className="btn-details" onClick={() => onSelect(recipe.id)}>
            Voir la recette
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;