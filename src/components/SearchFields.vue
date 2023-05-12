<template>
    <div :class="{search: true, searchActiv: searchFields}">
        <input v-model.trim="searchFields" type="search" class="inputSearch" placeholder="Поиск...">
        <div
            v-show="searchFields"
            @click="searchFields = ''"
            class="closeModal"
        >
        </div>
        <div class="search-resulWrap">
            <router-link 
                v-for="item in getFilterItems" 
                :key="item.id"
                :to="'/' +  item.type + '/' + item.id"
            >
                <div
                    class="search-resul"
                >
                    <p class="search-resul-name">{{ item.name }}</p>
                    <p>
                        <span>Тип:</span> {{ item.type == 'film' ? 'Фильм': 'Сериал' }} <span>  Дата:</span> {{ item.date }}
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            searchFields: '',
        }
    },

    computed: {
        getFilterItems() {
            if (this.searchFields) {
                let resul = this.$store.getters.getAllItems.filter(item => item.name.toLowerCase().includes(this.searchFields.toLocaleLowerCase())); 
                return resul.slice(0, 8);
            }
        }
    },
}
</script>


<style>
.inputSearch {
    padding: 0px 5px;
}
.inputSearch::before {
    content: '';
}
.search {
    border: 1px solid rgb(207, 207, 180);
    border-radius: 10px;
    padding: 2px 5px;
    position: relative;
}
.searchActiv {
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
}
.search-resulWrap {
    position: absolute;
    /* background: none; */
    top: 100%;
    z-index: 10;
}
.search-resul:hover *, .search-resul:hover{
    background: rgb(66, 63, 63);
}
.search-resul, .search-resul {
    transition: all 0.3s;
}

.search-resul {
    margin-top: 10px;
    border-bottom: 1px solid grey;
    padding-right: 10px;
    padding-left: 10px;
}
.search-resul * {
    font-size: 13px;
}

.search-resul span {
    color: #a44747;
}

.closeModal {
	position: absolute;
    bottom: 0;
    left: 90%;
	width: 14px;
	height: 14px;
	cursor: pointer;
    transition: opacity ease 0.5s;
}
.closeModal::before,
.closeModal::after {
	content: '';
	position: absolute;
	display: block;
	width: 13px;
	height: 2px;
	background: #ffffff;
}

.closeModal::before {
	transform: rotate(45deg);
}

.closeModal::after {
	transform: rotate(-45deg);
}
</style>