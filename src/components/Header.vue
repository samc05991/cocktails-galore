<template>
    <div class="header" v-on:click="goBack()">
        <h2><font-awesome-icon icon="cocktail" />H&#178;Tipsy</h2>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            goBack() {
                this.$root.cocktail = null;
                this.$router.push('/cocktails');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        background-color: var(--primary-dark);
        cursor: pointer;
        color: var(--font);
        padding: 3px 15px;
    }
</style>