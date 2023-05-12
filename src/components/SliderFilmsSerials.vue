<template>
    <!-- {{ getRatingList(nameTarget, sort, quantity) }} -->
    <!-- {{ getRatingList() }} -->
    <div class="bestFilms">
        <div class="container">
            <div class="sliderName">
                {{ nameBlock }}
            </div>
            <Slider
                :listSlider=getList()
            >
            </Slider>
        </div>
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
export default {
    props: ['nameTarget', 'sort', 'quantity', 'nameBlock'],

    data() {
        return {
            // $store.get
            
        }
    },

    methods: {
        getList() {
            return this.$store.getters.getSortItem(this.nameTarget, this.sort, this.quantity);
        },

        // test() {
        //    return this.$store.getters.getAllSortItem('2', 22);

        //     return 'rrr';
        // },
    },

    components: {
        Slider,
    },
}
</script>

<style scoped>
.sliderName {
    margin-bottom: 15px;
    margin-top: 80px;
    font-size: 19px;
}
</style>