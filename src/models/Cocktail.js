
export default class Cocktail {
    constructor(data) {
        Object.assign(this, data);
    }

    /**
     * @returns {Array}
     */
    getIngredients() {
        const maxIngredients = 15;
        let ingredients = [];

        for (let i = 1; i <= maxIngredients; i++) {
            let ingredient = {
                measure: this[`strMeasure${i}`],
                ingredient: this[`strIngredient${i}`],
            }

            // extract ingredients and measures from data,
            // data can have more measures than ingredients and vice versa
            if (ingredient.measure || ingredient.ingredient) {
                ingredients.push(ingredient);
            }
        }

        return ingredients;
    }
}