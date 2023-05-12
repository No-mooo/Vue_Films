<template>
<div
    ref="sliderItem"
    class="slider" 
>
    <div
        class="sliderWrap"
        :style=sliderWrap
        ref="sliderWrapItem"
    >
        <PrintItem 
            :listSlider="listSlider"
        >
        </PrintItem>
    </div>

    <div
        class="slider-prev slider-btn"
        @click="moveSlide(150)"
    >
        >
    </div>
    <div
        @click="moveSlide(-150)" 
        class="slider-next slider-btn"
    >
        >
    </div>
</div>
</template>


<script>
import PrintItem from './PrintItem.vue';
export default {
    props: ['listSlider'],
    data() {
        return {
            sliderWrap: {
                marginLeft: 0 + 'px',
            },
        }
    },
    components: {
        PrintItem,
    },

    methods: {
        getNumber(item) {
            let resul = Number(item.replace(/[^0-9]/g,""));
            if (item[0] == '-') resul *= -1;

            return resul;
        },

        moveSlide(scroll) {
            let maxScroll = this.$refs.sliderItem.offsetWidth - this.$refs.sliderWrapItem.scrollWidth;
            let resulMarginLeft = this.getNumber(this.sliderWrap.marginLeft) + scroll;

            if (resulMarginLeft > 0) {
                resulMarginLeft = 0;
            }

            if (resulMarginLeft < maxScroll) {
                resulMarginLeft = maxScroll;
            }

            this.sliderWrap.marginLeft = resulMarginLeft + 'px';
        },

        fixResizeSlider() {
            this.$nextTick(function () {
                if (this.$refs.sliderItem && this.$refs.sliderWrapItem) {
                    let sliderWidth = this.$refs.sliderItem.offsetWidth;
                    let sliderWrap = this.$refs.sliderWrapItem.lastElementChild.offsetLeft + this.$refs.sliderWrapItem.lastElementChild.offsetWidth;
    
                    if (Number(sliderWidth) > Number(sliderWrap)) {
                        let marginLeft = this.getNumber(this.sliderWrap.marginLeft);
                        this.sliderWrap.marginLeft = marginLeft + (sliderWidth - sliderWrap) + 'px';
                    }
                }
            })
        }
    },

    mounted() {
        window.addEventListener('resize', this.fixResizeSlider);
    },
}
</script>


<style>
.slider {
    position: relative;
    overflow: hidden;
}

.slider:hover .slider-btn{
    width: 30px;
}

.slider-btn {
    position: absolute;
    color: rgb(252, 252, 252);
    cursor: pointer;
    bottom: 0;
    height: 100%;
    background-color: rgb(99, 94, 94, 0.5);
    width: 20px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    user-select: none;
}

.slider-prev {
    transform: rotate(180deg);
}

.slider-next {
    right: 0;
}

.sliderWrap {
    display: flex;
    transition: all 0.3s;
    column-gap: 20px;
}
</style>