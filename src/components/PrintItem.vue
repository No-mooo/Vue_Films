<template>
    <router-link
        v-for="slider in listSlider"
        :key="slider.name"
        :to="'/' +  slider.type + '/' + slider.id"
    >
        <img
            class="sliderItem"
            :src="slider.src"
        >
        <p class="nameFilm">{{ slider.name }}</p>
    </router-link>
</template>
<script>
export default {
    props: ['listSlider'],
    
}
</script>
<style>
.sliderItem {
    max-width: 400px !important;
    height: auto;
}
.nameFilm {
    margin-top: 20px;
    text-align: center;
}
</style>