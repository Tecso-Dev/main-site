<template>
    <div id="__dsn_content" :class="store.colorPage">
        <ModeLanguage />
        <ModeColors />
        <BlackMenu hamburger />
        <slot />
        <CursorGrowing />
    </div>
</template>

<script setup>
import { store } from "@/store/store";
import { runOnLoad } from "@/hooks/plugin.js";
import { runAnimationOnLoad } from "@/hooks/pluginanimations.js";
import BlackMenu from "@/components/menu/BlackMenu.vue";
import CursorGrowing from "@/components/option-theme/CursorGrowing.vue";
import ModeLanguage from "~/components/option-theme/ModeLanguage.vue";
import ModeColors from "~/components/option-theme/ModeColors.vue";

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

<style>
    h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{
        font-family: "Excon", sans-serif;

    }
    body, .main-navigation{
        direction: ltr;
        font-family: "Excon", sans-serif;
    }


</style>
