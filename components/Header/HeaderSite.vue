<template>

    <header>
        <div class="header_wrapper">
            <nav class="navigation">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/aboutus">About Us</RouterLink>
                <RouterLink to="/market">Buy</RouterLink>
                <RouterLink to="/registration">Login</RouterLink>
            </nav>
        </div>
    </header>

</template>

<script>

import './header.css'

export default {
    name: 'HeaderSite'
}

</script>