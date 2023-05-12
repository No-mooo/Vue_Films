<template>
    <Header></Header>
    <PrintCatalogItem
        :nameTarget="'all'"
        :sort="'date'"
        :quantity="20"
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