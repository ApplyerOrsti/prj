<template>
<main>
    <div class="main_wrapper">
        <div v-if="usern">
            <h1 style="margin: 0; padding-top: 20%; text-align: center;">Здравствуйте, {{ usern }}!</h1>
        </div>
            <div class="chat_side" v-show="chat">
    <div v-if="usern">

        <div class="chat">

            <div class="txt" v-for="message in messages" v-bind:key="message.id">
                <ul>
                    {{ message.user }}: {{ message.text }} <p>{{ message.time }}</p>
                </ul>
            </div>

            <div v-show="empty" id="emp">
                <h4>Chat is empty</h4>
            </div>

        </div>

        <div class="txt_send">
            <button v-show="deleteb" @click="delm">Delete</button>
            <input v-model="newMessage" placeholder="Новое сообщение">
            <button @click="sendm">Send</button>
            <button @click="tofalse">close</button>
        </div>

    </div>
    <div v-else>

    <RouterLink to="/registration">Авторизируйтесь</RouterLink>

    </div>
        </div>

        <button @click="Totrue" v-show="!chat">Chat</button>
        
    </div>
</main>
</template>

<script>

import './main.css'

const date = new Date;

const h = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })


export default {
    name: 'MainSite',
    data( ) {
        return {
            messages: [],
            newMessage: '',
            deleteb: false,
            empty: true,
            usern: localStorage.getItem('usern'),
            chat: false
        }
    },
    methods: {

        computed() {
            localStorage.setItem('usern', this.$route.query.usern)
        },
        delm() {
            this.messages = [];
            this.empty = false;
            this.deleteb = false
        },
        sendm() {
            if (!this.usern) {
                this.usern = 'Anonimus'
            }

            if (this.newMessage !== '') {
                this.empty = false
                this.messages.push({id: new Date().getTime, text: this.newMessage, user: this.usern, time: h})
                this.newMessage = '';
                this.deleteb = true;
            }

        },
        Totrue() {
            this.chat = true
        },
        tofalse() {
            this.chat = false
        }
    }
}

</script>

<style scoped>
    h1 {
        color: white;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    ul > p {
        font-size: 75%;
        opacity: 0.6;
    }

    ul {
        width: 100%;
    }
</style>