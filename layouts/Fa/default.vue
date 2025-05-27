<template>
    <div id="__dsn_content" :class="store.colorPage">
        <ModeLanguageFa />
        <ModeColors />
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
import ModeColors from "@/components/option-theme/ModeColors"
import ModeLanguageFa from "~/components/option-theme/ModeLanguageFa.vue";

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
        font-family: "Ray", sans-serif;

    }
    body, .main-navigation {
        direction: rtl;
        font-family: "Ray", sans-serif;
    }

    .site-header, .control-nav , #port-horz , #about-index{
        direction: ltr !important;
    }

</style>