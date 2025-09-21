<script setup>
import { nextProject } from "@/hooks/plugin.js";
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/fa/portfolio/portfolio.json";
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ParallaxImageTwo from "@/components/images/ParallaxImageTwo.vue";
import ViewVideo from "@/components/images/ViewVideo.vue";
import ImagePopup from "@/components/images/ImagePopup.vue";
import BoxInfoRight from "@/components/box-info/BoxInfoRight.vue";
import ParagraphBox from "@/components/string/ParagraphBox.vue";
import ViewVideoFa from "~/components/images/ViewVideoFa.vue";
import NextProjectFa from "~/components/next/NextProjectFa.vue";
definePageMeta({ documentDriven: false });
const { slug } = useRoute().params;
const item = await data_Portf.find((item) => item.slug === slug);
if (!item) {
    throw createError({
        fatal: true,
        statusCode: 404,
        statusMessage: "Work Not Found",
        data: {
            msg: useRoute().path,
            redirectLink: "/work/work-list-1",
            linkName: "Portfolio",
        },
    });
}

onMounted(() => {
    Fancybox.defaults.Hash = false;
    Fancybox.bind("[data-fancybox]", {
        Thumbs: { Thumbs: true, showOnStart: true, type: "modern" },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: [
                    "zoomIn",
                    "zoomOut",
                    "toggle1to1",
                    "rotateCCW",
                    "rotateCW",
                    "flipX",
                    "flipY",
                ],
                right: ["slideshow", "thumbs", "close"],
            },
        },
        Carousel: { infinite: true },
    });
});
onUpdated(() => Fancybox.close());
onBeforeUnmount(() => Fancybox.destroy());

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>
    <Head>
        <Title>{{ item.title }}</Title>
    </Head>

    <Layout name="fa-default">
        <!-- ========== Header  ========== -->
        <HeaderFullFa
            :data="item"
            boxShadow
            btnScrollTo="info"
            :linkCircleTo="item.autherLink"
        />
        <!-- ========== End Header  ========== -->

        <!-- ========== Info Project  ========== -->
        <InfoProject id="info">
            <template v-slot:about>
                <h2 class="title-h2 dsn-up" data-fade-up>
                    {{ item.about[0].title }}
                </h2>
                <p class="max-w750 mt-30 dsn-up" data-fade-up>
                    {{ item.about[0].text[0] }}
                </p>
            </template>
            <InfoProjectItem
                v-for="(info, index) in item.infoProject"
                :key="index"
                :title="info.title"
                :description="info.description"
            />
        </InfoProject>
        <!-- ========== End Info Project  ========== -->

        <!-- ========== video  ========== -->
        <!-- ========== End video  ========== -->

        <!-- ========== Info  ========== -->
        <BoxInfoRight style="direction:rtl" :data="item.about[2]" />
        <!-- ========== End Info  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup
            class="dsn-container"
            mask
            :imageList="[item.images[1], item.images[2]]"
        />
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Parallax Image With Popup  ========== -->
        <ParallaxImageTwo
            :src="item.images[3].src"
            :caption="item.images[3].name"
            fancybox="_1"
        />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Paragraph  ========== -->
        <ParagraphBox>{{ item.about[1].text[1] }}</ParagraphBox>
        <!-- ========== End Paragraph  ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProjectFa light :next="nextProject(item.id, data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
