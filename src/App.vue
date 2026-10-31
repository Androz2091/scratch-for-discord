<template>
    <NavigationBar></NavigationBar>
    <BlocklyComponent id="blocklySpace"></BlocklyComponent>
    <TourComponent :steps="tourSteps"></TourComponent>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import TourComponent from "./components/TourComponent.vue";

const tourSteps = [
    { target: "#v-step-0", content: "tour.steps.load_examples" },
    { target: "#v-step-1", content: "tour.steps.run_test" },
    { target: "#v-step-2", content: "tour.steps.export_code" }
];
</script>

<style>
body {
    overflow: hidden;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* Dragging blocks on touch screens must not select the page */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
}

#app textarea,
#app [contenteditable] {
    -webkit-user-select: text;
    user-select: text;
}

#blocklySpace {
    position: relative;
    flex: 1;
}

.boldtext {
    font-weight: bolder;
}
</style>
