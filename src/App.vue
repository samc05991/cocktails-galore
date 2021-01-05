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
            // this.$router.push('/');
        }
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