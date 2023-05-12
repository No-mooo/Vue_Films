<template>
    <div class="container">
        <div class="printWrap">
            <PrintItem
                :listSlider="getList()"
            >
            </PrintItem>
        </div>
    </div>
</template>
<script>
import PrintItem from './PrintItem.vue';
export default {
    props: ['nameTarget', 'sort', 'quantity'],

    methods: {
        getList() {
            return this.$store.getters.getSortItem(this.nameTarget, this.sort, this.quantity);
        },
    },
    components: {
        PrintItem,
    }
    
}
</script>
<style>
.printWrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
    justify-content: space-between;
}
</style>