import Vue from 'vue';
import VueRouter from 'vue-router';
import CocktailList from '../pages/CocktailList.vue';
import SelectedCocktail from '../pages/SelectedCocktail.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'CocktailList',
        component: CocktailList
    },
    {
        path: '/selected-cocktail/:id',
        name: 'SelectedCocktail',
        component: SelectedCocktail
    }
]

const router = new VueRouter({
    routes
})

export default router
