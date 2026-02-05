function InfoCard({ recipe }) {
  return (
    <div className="info-card">
      <h3>Informations</h3>
      <p><strong>Difficulté :</strong> {recipe.difficulty}</p>
      <p><strong>Portions :</strong> {recipe.servings} personnes</p>
      <p><strong>Calories :</strong> {recipe.caloriesPerServing} kcal / pers.</p>
      <p><strong>Note :</strong> {recipe.rating} ⭐ ({recipe.reviewCount} avis)</p>
    </div>
  );
}

export default InfoCard;