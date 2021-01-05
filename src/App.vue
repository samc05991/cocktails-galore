<template>
    <div id="app">
        <Header/>

        <Footer/>
    </div>
</template>

<script>
    // pages
    import CocktailList from './components/CocktailList.vue';
    // import SelectedCocktail from './components/SelectedCocktail.vue';

    // components
    // import CardItem from './components/CardItem.vue'
    // import Filter from './components/Filter.vue'
    import Footer from './components/Footer.vue';
    import Header from './components/Header.vue';
    // import Instructions from './components/Instructions.vue'
    // import Search from './components/Search.vue'

    export default {
        name: 'App',
        components: {
            // CardItem,
            CocktailList,
            // Filter,
            Footer,
            Header,
            // Instructions,
            // Search,
        },
        //         mounted() {
        //     axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        //         .then(response => (console.log(response)))
        // }
    }
</script>

<style>
    :root {
        --primary: #F230D2;
        --primary-dark: #BF1792;
        --secondary: #0433BF;
        --secondary-dark: #080C59;
        --dark: #020126;
        --font-dark: #020126;
        --font: white;
    }

    body {
        margin: 0px;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
