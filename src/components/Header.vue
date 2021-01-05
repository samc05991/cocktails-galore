<template>
    <div class="header">
        <h1><font-awesome-icon icon="cocktail" />H2Tipsy</h1>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {

        }
    }
</script>

<style lang="scss" scoped>
    .header {
        background-color: var(--primary);
        color: var(--font);
        padding: 3px 15px;
    }
</style>