<template>
    <div id="app">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Footer from './components/Footer.vue';
    import Header from './components/Header.vue';

    export default {
        name: 'App',
        components: {
            Footer,
            Header,
        },
        mounted() {
            this.$router.push('/cocktails');
        }
    }
</script>

<style>
    :root {
        --primary: #F230D2;
        --primary-dark: #c08dda;
        --secondary: #0433BF;
        --secondary-dark: #212684;
        --dark: #605eb2;
        --light: #d5ccdc;
        --font-dark: #020126;
        --font: white;
    }

    body {
        margin: 0px;
        background-color: var(--light);
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img {
        border-radius: 4px;
        width : 175px;
        height: 175px;
        margin: 10px;

        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    }
</style>