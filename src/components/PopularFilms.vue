<template>
    <Header></Header>
    <PrintCatalogItem
        :nameTarget="'listFilms'"
        :sort="'rating'"
        :quantity="10"
    >
    </PrintCatalogItem>
</template>
<script>
import Header from './Header.vue';
import PrintCatalogItem from './PrintCatalogItem.vue';
export default {
    components: {
        Header,
        PrintCatalogItem,
    },
}
</script>
<style>

</style>