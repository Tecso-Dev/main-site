<script setup>
import { computed } from 'vue'; // Added import
import { nextProject } from "@/hooks/plugin.js"
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/fa/portfolio/portfolio.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import LinkCircle from "@/components/links/LinkCircle.vue"
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ParallaxImage from "@/components/images/ParallaxImage.vue";
import ImagePopup from "@/components/images/ImagePopup.vue";
import BoxInfoFull from "@/components/box-info/BoxInfoFull.vue";
import BoxInfoList from "@/components/box-info/BoxInfoList.vue";
import BoxInfoItem from "@/components/box-info/BoxInfoItem.vue";
import ImagesSwiper from "@/components/portfolio/images-swiper/ImagesSwiper.vue";
import NextProjectFa from '~/components/next/NextProjectFa.vue';
definePageMeta({ documentDriven: false });
const { slug } = useRoute().params
const item = await data_Portf.find(item => item.slug === slug)
if (!item) {
    throw createError({
        fatal: true, statusCode: 404,
        statusMessage: "Work Not Found",
        data: { msg: useRoute().path, redirectLink: "/work/work-list-1", linkName: "Portfolio" }
    })
}

// Added computed properties for robust image handling
const parallaxImageInfo = computed(() => {
  if (item.images && item.images[1] && item.images[1].src) {
    return item.images[1];
  }
  return null;
});

const imagePopupList = computed(() => {
  const list = [];
  if (item.images) {
    if (item.images[2] && item.images[2].src) {
      list.push(item.images[2]);
    }
    if (item.images[3] && item.images[3].src) {
      list.push(item.images[3]);
    }
  }
  return list;
});

const boxInfoFullImageSrc = computed(() => {
  if (item.images && item.images[4] && item.images[4].src) {
    return item.images[4].src;
  }
  return null;
});

const imagesSwiperData = computed(() => {
  if (item.images) {
    // Slice first, then filter. Slice handles out-of-bounds gracefully.
    return item.images.slice(5, 9).filter(img => img && img.src);
  }
  return [];
});

onMounted(() => {
    Fancybox.defaults.Hash = false;
    Fancybox.bind("[data-fancybox]", {
        Thumbs: { Thumbs: true, showOnStart: true, type: "modern" },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY",],
                right: ["slideshow", "thumbs", "close"],
            },
        },
        Carousel: { infinite: true },
    });
})
onUpdated(() => Fancybox.close())
onBeforeUnmount(() => Fancybox.destroy());
</script>

<template>

    <Head>
        <Title>{{ item.title }}</Title>
    </Head>

    <Layout>
        <!-- ========== Header  ========== -->
        <HeaderRightImageFa :data="item" btnScrollTo="info" :linkCircleTo="item.autherLink" />
        <!-- ========== End Header  ========== -->

        <!-- ========== Info Project  ========== -->
        <InfoProject id="info">
            <InfoProjectItem v-for="(info, index) in item.infoProject" :key="index" :title="info.title"
                :description="info.description" />
        </InfoProject>
        <!-- ========== End Info Project  ========== -->

        <!-- ========== Parallax Image With Popup  ========== -->
        <ParallaxImage v-if="parallaxImageInfo" class="section-margin" :src="parallaxImageInfo.src" :caption="parallaxImageInfo.name" fancybox="_1" />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup v-if="imagePopupList.length > 0" class="container" :imageList="imagePopupList" />
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Right Box With Image ========== -->
        <BoxInfoFull v-if="boxInfoFullImageSrc" :imageSrc="boxInfoFullImageSrc">
            <template v-slot:title>
                <SectionTitle :title="item.about && item.about[1] ? item.about[1].title : ''" beforeStyle="circle-before" :spaceDown="false" />
            </template>
            <template v-slot:string>
                <p class="mt-20 pt-20 border-top">{{ item.about && item.about[1] && item.about[1].text && item.about[1].text[0] ? item.about[1].text[0] : '' }}</p>
            </template>
            <BoxInfoList>
                <BoxInfoItem v-for="(textLine, index) in item.textLines" :key="index" :item="textLine.text" />
            </BoxInfoList>
        </BoxInfoFull>
        <!-- ========== End Right Box With Image ========== -->

        <!-- ========== Portfolio ========== -->
        <ImagesSwiper v-if="imagesSwiperData.length > 0" :data="imagesSwiperData"
            class="dsn-container dsn-right-container over-hidden background-section section-padding section-margin dsn-swiper"
            Pagination grabCursor loop parallax :centeredSlides="false"
            :desktop="{ slidesPerView: 2.5, spaceBetween: 30, centeredSlides: false }"
            :tablet="{ spaceBetween: 30, slidesPerView: 2, centeredSlides: false }"
            :mobile="{ spaceBetween: 30, slidesPerView: 1, centeredSlides: false }" :speed="800"
            :loopedSlides="2">
        </ImagesSwiper>
        <!-- ========== End Portfolio ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProjectFa light :next="nextProject(item.id, data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
