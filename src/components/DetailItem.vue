<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="itemInfo">
                <img :src="itemInfo.src" alt="">
                <div>
                    <p class="nameItem">
                        <span class="spec">Название: </span>{{ itemInfo.name }}
                    </p>
                    <p class="rating">
                        <span class="spec">Райтинг: </span> {{ itemInfo.rating }}
                    </p>
                    <p class="data">
                        <span class="spec">Дата выхода: </span> {{ itemInfo.data }}
                    </p>
                    <div class="detailedDescription">
                        <span class="spec">Описание:</span> {{ itemInfo.detailText }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue';
export default {
    data() {
        return {
            itemInfo: '',
        }
    },
    methods: {
        test() {
            return this.$route.params.id;
        }
    },
    components: {
        Header,
    },
    mounted() {
        this.itemInfo = this.$store.getters.getItem(this.$route.params.id);
    }
}
</script>
<style>
.itemInfo {
    display: flex;
    column-gap: 60px;
}

.itemInfo * {
    font-size: 23px;
}

.spec {
    color: #a44747;
}
</style>