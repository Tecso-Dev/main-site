<template>
    <div id="__dsn_content" :class="['xxx',store.colorPage]">
        <BlackMenuFa hamburger />
        <slot />
        <CursorGrowing />
    </div>
</template>

<script setup>
import { store } from "@/store/store";
import { runOnLoad } from "@/hooks/plugin.js";
import { runAnimationOnLoad } from "@/hooks/pluginanimations.js";
import BlackMenuFa from "~/components/menu/BlackMenuFa.vue";
import CursorGrowing from "@/components/option-theme/CursorGrowing.vue";

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:loading:end",() => {
    runOnLoad();
    runAnimationOnLoad();
});

onMounted(() => {
    runOnLoad();
    runAnimationOnLoad();
})
</script>
