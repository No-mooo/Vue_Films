<template>
    <Header></Header>
    <SliderFilmsSerials
        :nameBlock="'Новинки'"
        :nameTarget="'all'"
        :sort="'date'"
        :quantity=7
    >
    </SliderFilmsSerials>

    <SliderFilmsSerials
        :nameBlock="'Популярыне фильмы'"
        :nameTarget="'listFilms'"
        :sort="'rating'"
        :quantity=7
    >
    </SliderFilmsSerials>
    <SliderFilmsSerials
        :nameBlock="'Популярные сериалы'"
        :nameTarget="'listSerials'"
        :sort="'rating'"
        :quantity=7
    >
    </SliderFilmsSerials>
    

</template>
<script>
import SliderFilmsSerials from './SliderFilmsSerials.vue';
import Header from '@/components/Header.vue';
export default {
    components: {
        Header,
        SliderFilmsSerials,
    },
}
</script>
<style>
    
</style>