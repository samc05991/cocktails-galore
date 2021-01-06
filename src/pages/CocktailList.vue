<template>
    <div>
        <Search/>
        <div class="cocktail-list">
            <div
                class="cocktail-item"
                v-for="cocktail in getCocktails()"
                :key="cocktail.idDrink"
                v-on:click="selectCocktail(cocktail.idDrink)">
                <img v-bind:src="cocktail.strDrinkThumb" />
                <div class="img-overlay"><p>{{cocktail.strDrink}}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
    import DataProvider from "../services/dataProvider";
    import Search from "../components/Search";

    const dataProvider = new DataProvider();

    export default {
        name: 'CocktailList',
        components: {
            Search: Search
        },
        methods: {
            /**
            * @returns {Cocktail[]}
            */
            getCocktails: function () {
                return this.$root.cocktails || [];
            },
            /**
            * @param {string} cocktailId
            */
            selectCocktail: function (cocktailId) {
                this.$router.push(`/cocktail/${cocktailId}`)
            }
        },
        mounted() {
            this.$root.$on('searchupdated', (data) => {
                dataProvider.getCocktailByName(data).then((cocktails) => {
                    this.$root.cocktails = cocktails;

                    this.$forceUpdate();
                });
            });

            // if not already fetched, fetch again
            if (!this.$root.cocktails) {
                dataProvider.getCocktails().then((cocktails) => {
                    this.$root.cocktails = cocktails;

                    this.$forceUpdate();
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cocktail-list {
        padding: 20px;
        height: 90%;
        display: flex;
        flex-wrap: wrap;

        .cocktail-item {
            margin: 10px auto;
            cursor: pointer;
            height: 175px;

            .img-overlay {
                position: relative;
                margin: 10px;
                padding-top: 55px;
                width: 175px;
                height: 175px;
                top: -199px;
                box-sizing: border-box;
                text-align: center;
                opacity: 0;
                border-radius: 4px;
                transition: all 0.4s;

                p {
                    margin: 0px;
                }
            }

            .img-overlay:hover {
                color: var(--font);
                background-color: var(--dark);
                opacity: 0.95;
            }
        }
    }
</style>
