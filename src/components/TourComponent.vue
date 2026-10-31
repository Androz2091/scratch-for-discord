<template>
    <div v-if="step !== null" class="tour card shadow" :style="position">
        <div class="card-body">
            <p class="card-text">{{ $t(steps[step].content) }}</p>
            <div class="d-flex gap-2 justify-content-end">
                <button class="btn btn-sm btn-link text-white" @click="finish">{{ $t("tour.skip") }}</button>
                <button v-if="step > 0" class="btn btn-sm btn-outline-light" @click="step--">{{ $t("tour.previous") }}</button>
                <button v-if="step < steps.length - 1" class="btn btn-sm btn-light" @click="step++">{{ $t("tour.next") }}</button>
                <button v-else class="btn btn-sm btn-light" @click="finish">{{ $t("tour.finish") }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
    steps: {
        type: Array,
        required: true
    }
});

const step = ref(null);

// Below its target, kept on screen
const position = computed(() => {
    const target = document.querySelector(props.steps[step.value].target)?.getBoundingClientRect();
    if (!target?.width) return { top: "70px", right: "16px" };
    return {
        top: `${target.bottom + 12}px`,
        left: `${Math.max(16, Math.min(target.left + target.width / 2 - 160, window.innerWidth - 336))}px`
    };
});

function finish() {
    step.value = null;
    localStorage.setItem("tourDone", "true");
}

onMounted(() => {
    if (localStorage.getItem("tourDone") === null) step.value = 0;
});
</script>

<style scoped>
.tour {
    position: fixed;
    z-index: 1000;
    width: 320px;
    background-color: #34495e;
    color: white;
}
</style>
