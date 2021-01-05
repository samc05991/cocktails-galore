import axios from "axios"
;
export default class DataProvider {

    getCocktails() {
        return axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then((response) => response.data.drinks);
    }
}