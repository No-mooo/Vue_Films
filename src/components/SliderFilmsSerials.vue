<template>
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
            
        }
    },

    methods: {
        getList() {
            return this.$store.getters.getSortItem(this.nameTarget, this.sort, this.quantity);
        },
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