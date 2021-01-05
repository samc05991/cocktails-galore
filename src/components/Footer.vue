<template>
    <div class="footer">
        <p>Data sourced from https://www.thecocktaildb.com/ </p>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {},
    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: var(--primary);
        color: white;
        padding: 5px 15px;
    }
</style>