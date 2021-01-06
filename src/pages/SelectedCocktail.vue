<template>
    <div class="selected-cocktail">
        <div class="details-header">
            <h3> {{cocktail.strDrink}} </h3>
            <img v-bind:src="cocktail.strDrinkThumb" />
        </div>

        <div class="details">
            <div class="text-block full">
                <h4><font-awesome-icon icon="chalkboard-teacher"/> Instructions</h4>
                {{cocktail.strInstructions}}
            </div>

            <div class="text-block" v-if="cocktail.strTags">
                <h4><font-awesome-icon icon="tags"/> Tags</h4>
                {{cocktail.strTags}}
            </div>

            <div class="text-block">
                <h4><font-awesome-icon icon="bookmark"/> Category</h4>
                {{cocktail.strCategory}}
            </div>

            <div class="text-block">
                <h4><font-awesome-icon icon="beer"/> Alochol?</h4>
                {{cocktail.strAlcoholic}}
            </div>

            <div class="text-block">
                <h4><font-awesome-icon icon="glass-martini"/> Use a </h4>
                {{cocktail.strGlass}}
            </div>

            <div class="text-block">
                <h4><font-awesome-icon icon="list-ul"/> Ingredients </h4>

                <div class="ingredient" v-for="(item, index) in cocktail.getIngredients()" v-bind:key="index">
                    {{item.ingredient}} - {{item.measure}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DataProvider from '../services/dataProvider';
    import Cocktail from '../models/Cocktail';

    const dataProvider = new DataProvider();

    export default {
        name: 'SelectedCocktail',
        data: function() {
            return {
                cocktail: new Cocktail()
            }
        },
        methods: {
            getCocktail: function() {
                dataProvider.getCocktailById(this.$route.params.id).then((cocktail) => {
                    this.cocktail = cocktail;
                    this.cocktail.getIngredients();
                    this.$forceUpdate();
                });
            }
        },
        mounted() {
            this.getCocktail();
        }
    }
</script>

<style lang="scss" scoped>
    .selected-cocktail {
        margin: 0 auto;
        min-height: 80vh;
        width: 80%;
        text-align: center;

        img {
            width: 175px;
            height: 175px;
        }

        .details {
            display: inline-flex;
            flex-wrap: wrap;

            .text-block {
                margin: 0 auto;
                margin-top: 20px;
                padding: 10px;
            }

            .full {
                width: 100%;
            }
        }

        .details-full {
            width: 100%;
        }

    }
</style>
