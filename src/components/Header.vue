<template>
    <div class="header">
        <div class="container">
            <div class="header-wrap">
                <router-link :to="'/Home'">
                    <img src="@/assets/img/logo.png" alt="">
                </router-link>
                <div class="header-menu">
                    <SearchFields></SearchFields>
                    <nav>
                        <NavList />
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchFields from '@/components/SearchFields.vue';
import NavList from '@/components/NavList.vue'
export default {
    components: {
        SearchFields,
        NavList,
    },
}
</script>

<style>
.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header {
    margin-top: 60px;
    margin-bottom: 80px;
}
.header-menu {
    display: flex;
    column-gap: 10px;
    align-items: center;
}
</style>