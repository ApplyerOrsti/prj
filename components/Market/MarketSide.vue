<template>
    <main>
        <div class="main_wrapper">
            <a class="gh" href="mailto:ceo@65-1.ru">Наличие и цену уточняйте у продавца</a>
            </div>
    </main>
</template>

<script>


    export default {
        name: 'MarketSide'
    }
</script>

<style scoped>
    .gh {
        color: white;
    }

    .main_wrapper {
        width: 95%;
        height: 80%;

        text-align: center;
        
        margin: auto;
        position: relative;
        top: 10%;
    }

    .main_wrapper > div {
        width: 100%;
        height: 50%;
        padding-top: 15%;
    }

    input {
        width: 30%;
        height: 10%;
        text-align: justify;
        margin: 2.5%;
    }

    label {
        color:  white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    
    textarea {
        width: 50%;
        font-family: 'Times New Roman', Times, serif;
        font-size: 150%;
    }

</style>