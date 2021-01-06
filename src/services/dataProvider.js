import axios from "axios";
import Cocktail from "../models/Cocktail";

export default class DataProvider {

    getCocktails() {
        return axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then((response) => response.data.drinks);
    }

    getCocktailById(id) {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => new Cocktail(response.data.drinks[0]));
    }

    getCocktailByName(val) {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`)
            .then((response) => response.data.drinks);
    }
}