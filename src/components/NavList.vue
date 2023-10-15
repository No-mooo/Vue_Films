<template>
    <ul class="listNavWrap">
        <li 
            v-for="itemNav in listNav"
            :key="itemNav.id"
        >
            <router-link 
                :to="itemNav.route"
                :class="{activeNav: $route.path == itemNav.route}"
            >
                {{ itemNav.name }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            listNav: [
                {
                    name: "Главное",
                    route: "/Home",
                },
                {
                    name: "Новинки",
                    route: "/new"
                },
                {
                    name: "Популярные фильмы",
                    route: "/PopularFilms"
                },
                {
                    name: "Популярные сериалы",
                    route: '/PopularSeries'
                },
            ],
        }
    },
}
</script>


<style>
.listNavWrap {
    display: flex;
    column-gap: 10px;
}

.listNavWrap li {
    cursor: pointer;
    transition: all 0.3s;
}

.listNavWrap li:hover {
    color: #e88b2f;
}

.activeNav {
    color: #a44747;
}
</style>