<script setup>
import data_blogs from "@/api/fa/blog/blog.json";
import BlogList from "@/components/blog/BlogList.vue"
import DsnFooterFa from '@/components/footer/DsnFooterFa.vue';
import BlogListFa from "~/components/blog/BlogListFa.vue";

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>داستان ها</Title>
    </Head>

    <NuxtLayout bodyStyle="bg-dots" name="fa-defalut">
        <!-- ========== Header ========== -->
        <HeaderHalf title="داستان های ما" :metas="['اخبار', 'ایده ها']" btnScrollTo="list" />
        <!-- ========== End Header ========== -->

        <!-- ========== Stories ========== -->
        <BlogListFa id="list" :data="data_blogs" />
        <!-- ========== End Stories ========== -->

        <!-- ========== Footer =================== -->
        <DsnFooterFa light animate />
        <!-- ========== End Footer =============== -->
    </NuxtLayout>
</template>
