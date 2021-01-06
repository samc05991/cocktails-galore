<template>
    <div class="search">
        <div class="search-box">
            <p>Cocktail Search Engine</p>
            <input type="text" class="search-by-letter" id="search" value="" v-model="searchterm">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data: function() {
            return {
                searchterm: ''
            }
        },
        watch: {
            'searchterm': function(newVal) {
                this.$root.$emit('searchupdated', newVal);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        background-color: var(--dark);
        width: 100%;

        .search-box {
            padding: 10px;
            margin: 0 auto;
            text-align: center;

            p {
                margin: 0px;
                margin-right: 10px;
                color: white;
                display: inline-block;
            }

            .search-by-letter {
                padding: 5px;
                border-radius: 4px;
                border: 0px;
                display: inline-block;
            }
        }
    }
</style>
