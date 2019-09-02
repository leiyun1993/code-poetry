<template>
    <div id="app">
        <router-view />
        <Header></Header>
    </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: "app",
    components: {
        Header
    }
};
</script>

<style>
</style>
