import InstructionsList from './InstructionsList';
import IngredientsList from './IngredientsList';
import InfoCard from './InfoCard';

function RecipeDetail({ recipe, onBack }) {
  return (
    <section className="recipe-detail">
      <button className="btn-back" onClick={onBack}>
        ← Retour à la liste
      </button>

      <div className="detail-header">
        <img src={recipe.image} alt={recipe.name} className="detail-hero" />
        <div className="detail-title-block">
          <h1>{recipe.name}</h1>
          <div className="tags">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
            {recipe.mealType.map((meal, index) => (
              <span key={`meal-${index}`} className="tag">{meal}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <InstructionsList instructions={recipe.instructions} />
        </div>

        <aside className="detail-sidebar">
          <InfoCard recipe={recipe} />
          <IngredientsList ingredients={recipe.ingredients} />
        </aside>
      </div>
    </section>
  );
}

export default RecipeDetail;