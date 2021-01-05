<template>
    <div class="cocktail-list">
        <div
            class="cocktail-item"
            v-for="cocktail in getCocktails()"
            :key="cocktail.idDrink"
            v-on:click="selectCocktail(cocktail.idDrink)">
            <img v-bind:src="cocktail.strDrinkThumb" />
        </div>
    </div>
</template>

<script>
    import DataProvider from "../services/dataProvider";

    const dataProvider = new DataProvider();

    export default {
        name: 'CocktailList',
        methods: {
            getCocktails: function () {
                return this.$root.cocktails || [];
            },
            selectCocktail: function (cocktailId) {
                console.log(cocktailId);
            }
        },
        mounted() {
            dataProvider.getCocktails().then((cocktails) => {
                this.$root.cocktails = cocktails;

                this.$forceUpdate();
            });
        }
    }
</script>

<style lang="scss" scoped>
    .cocktail-list {
        padding-top: 20px;
        height: 90%;
        background-color: var(--dark);
        display: flex;
        flex-wrap: wrap;

        .cocktail-item {
            margin: 20px auto;
            margin-right: 20px;
            margin-left: 20px;

            cursor: pointer;

            img {
                width : 175px;
                height: 175px;
            }
        }
    }
</style>
