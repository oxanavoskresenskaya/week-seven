import iconCheck from './icon-check.png';
function MyRecipeComponent ({label, image, calories, ingredients}) {
    return (
    <div>
        <div className='container'>
            <h2>{label}</h2>
        </div>
        <div className='container'>
            <img src={image} alt='photo'/>
        </div>
        <div className='container'>
            <p>{Math.floor(calories)} calories</p>
        </div>
        <ul className='list'>
            {ingredients.map (ingredient => (
                <li><img src={iconCheck} alt='icon-check' width='25px'/>{ingredient}</li>
            ))}
        </ul>
    </div>
    )

}
export default MyRecipeComponent;