import Header from './Header';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onSelectRecipe }) {
  return (
    <>
      <Header />
      <main className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onSelect={onSelectRecipe}
          />
        ))}
      </main>
    </>
  );
}

export default RecipeList;