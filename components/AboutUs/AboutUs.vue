<template>
    <main>
        <div class="main_wrapper">
            <h3>Процент денег с ваших покупок идёт на поддержку многих американских команд</h3>
            <div v-show="loaded" v-for="(el, i) in team" v-bind:key="el.id" class="as">
                {{ i + 1 }}. {{ el.full_name }}
            </div>
            <h1 v-show="!loaded">Загрузите список команд</h1>
            <h1 v-show="loading">Загрузка...</h1>
            <button class="butt" @click="sude" v-show="!loaded">Загрузить список</button>
        </div>
    </main>
</template>

<script>

    import './main.css'

    export default {
        name: 'AboutUs',
        data() {
            return {
                team: [],
                loaded: false,
                unloaded: false,
                loading: false
            }
        },
        methods: {
           async datas() {
            const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd89af9f46msh5a3aaa4e0a538bap169c9djsn1d9c08fe0ce8',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	const resultparse = JSON.parse(result)
    this.team = resultparse.data
    if (this.team !== '')
        this.loaded = true
        this.loading = false
    console.log('Список выведен!')
} catch (error) {
	console.error(error);
}
            },
    sude() {
        setTimeout(this.datas, 3000)
        this.unloaded = true
        this.loaded = true
        this.loading = true
    }
        }
    }

</script>

<style scoped>
    .as {
        color: white;
        position: relative;
        top: 12.5%;
    }

    .main_wrapper {
        width: 95%;
        height: 80%;
        position: relative;
        top: 10%;
        margin: auto;
        color: white;
    }

    h3 {
        margin: 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    h1 {
        text-align: center;
        padding-top: 5%;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(255, 255, 255);
    }

    .butt {
        width: 20%;
        height: 20%;
        position: relative;
        left: 40%;
        top: 0%
    }

</style>