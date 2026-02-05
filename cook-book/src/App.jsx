import { useEffect, useReducer } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './index.css';

// État initial
const initialState = {
  recipes: [],
  selectedRecipe: null,
  isLoading: true,
  error: null
};

// Reducer pour gérer les actions
function recipeReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
        error: null
      };
    
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    
    case 'SELECT_RECIPE':
      const recipe = state.recipes.find(r => r.id === action.payload);
      return {
        ...state,
        selectedRecipe: recipe
      };
    
    case 'BACK_TO_LIST':
      return {
        ...state,
        selectedRecipe: null
      };
    
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Fetch des recettes au montage du composant
  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=9')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data.recipes });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, []);

  // Fonctions de gestion
  const handleSelectRecipe = (recipeId) => {
    dispatch({ type: 'SELECT_RECIPE', payload: recipeId });
  };

  const handleBackToList = () => {
    dispatch({ type: 'BACK_TO_LIST' });
  };

  // Affichage conditionnel
  if (state.isLoading) {
    return (
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '100px' }}>
          Chargement des recettes...
        </p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '100px', color: 'red' }}>
          Erreur : {state.error}
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      {state.selectedRecipe ? (
        <RecipeDetail 
          recipe={state.selectedRecipe} 
          onBack={handleBackToList}
        />
      ) : (
        <RecipeList 
          recipes={state.recipes} 
          onSelectRecipe={handleSelectRecipe}
        />
      )}
    </div>
  );
}

export default App;