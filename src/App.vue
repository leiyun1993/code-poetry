<template>
    <div id="app">
        <div class="particles-js">
            <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4" linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi">
            </vue-particles>
        </div>
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
code {
    color: inherit;
    padding: 4px 4px 2px 0;
    letter-spacing: -0.3px;
}
pre {
    margin: 2px 0 8px;
    padding: 18px;
    background-color: #f5f7f8;
}
.particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
