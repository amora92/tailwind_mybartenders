import { StarIcon } from '@heroicons/react/solid'

interface RecipeProps {
  title: string
  description: string
  prepTime: string
  cookTime: string
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  rating: number
  ingredients: string[]
  instructions: string[]
}

export const Recipe = ({
  title,
  description,
  prepTime,
  cookTime,
  servings,
  difficulty,
  rating,
  ingredients,
  instructions
}: RecipeProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${index < rating ? 'star-filled' : 'star-empty'}`}
      />
    ))
  }

  return (
    <div className='recipe-card'>
      <div className='recipe-header'>
        <h3 className='text-2xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='recipe-meta'>
          <span>Prep: {prepTime}</span>
          <span>Cook: {cookTime}</span>
          <span>Servings: {servings}</span>
          <span>Difficulty: {difficulty}</span>
          <div className='recipe-rating'>Rating: {renderStars(rating)}</div>
        </div>
      </div>

      <div className='recipe-details'>
        <div>
          <h4 className='text-xl font-semibold mb-4'>Ingredients</h4>
          <ul className='recipe-ingredients'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='flex items-center gap-2'>
                <input type='checkbox' className='rounded text-gold-600' />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-xl font-semibold mb-4'>Instructions</h4>
          <div className='recipe-steps'>
            {instructions.map((step, index) => (
              <div key={index} className='recipe-step'>
                <span className='step-number'>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
