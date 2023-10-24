<template>
<main>
        <div class="login">

    <div v-if="isAuth" class="auth">
        <div class="greeting">Здравствуйте, <b>{{ usern }}!</b></div>
        <div class="lint"><button @click="logout">Выйти</button></div>
    </div>

    <div v-else class="logining">
        <h3>Пожалуйста, войдите</h3>
        <div class="lin">
            <input v-model="usern" @keyup.enter="login" placeholder="Login">
            <button @click="login">Войти</button>
        </div>
    </div>
        </div>
</main>
</template>

<script>

    import './login.css';

    export default {
        name: 'LogIn',
        data () {
        return {
            isAuth: false,
            usern: ''
        }
    },
    created() {
        if (localStorage.getItem('isAuth')) {
            this.isAuth = true;
            this.usern = localStorage.getItem('usern')
            }
        },
    methods: {
        login() {
        if (this.usern !== '') {
            this.isAuth = true

            localStorage.setItem('isAuth', true);
            localStorage.setItem('usern', this.usern)
            
            this.$router.push({
                name: 'Main',
                query: {usern: this.usern}
            })
        }
        else  {
            alert('Введите логин')
        }
    },
    logout() {
        this.isAuth = false;
        this.usern = '';
        localStorage.removeItem('isAuth')
        localStorage.removeItem('usern')
    }
    }
    }
</script>

<style scoped>

    h3 {
        color: white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 300%;
    }
    
    .lin {
        width: 100%;
        height: 10%;
    }

    .lint {
        width: 400%;
        height: 10%;
        position: relative;
        margin: 0;
        left: -150%;
        font-size: 150%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .greeting {
        font-size: 200%;
        color: white;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    input {
        width: 80%;
        border-radius: 5vh;
        height: 100%;
        padding: 2.5%;
        font-size: 200%;
        position: relative;
        left: 10%;
    }

    button {
        width: 20%;
        height: 150%;
        position: relative;
        left: 40%;
        margin-top: 5%;
        border-radius: 5vh;
    }

</style>