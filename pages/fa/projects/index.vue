<script setup>
import data_blogs from "@/api/fa/blog/blog.json";
import BlogList from "@/components/blog/BlogList.vue"
import DsnFooterFa from '@/components/footer/DsnFooterFa.vue';
import BlogListFa from "~/components/blog/BlogListFa.vue";
import ProjectsListFa from "~/components/blog/ProjectsListFa.vue";

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>پروژه ها</Title>
    </Head>

    <Layout bodyStyle="bg-dots" name="fa-defalut">
        <!-- ========== Header ========== -->
        <HeaderHalf title="پروژه های ما" :metas="['پروژه ها', 'ایده ها']" btnScrollTo="list" />
        <!-- ========== End Header ========== -->

        <!-- ========== Stories ========== -->
        <ProjectsListFa id="list" :data="data_blogs" />
        <!-- ========== End Stories ========== -->

        <!-- ========== Footer =================== -->
        <DsnFooterFa light animate />
        <!-- ========== End Footer =============== -->
    </Layout>
</template>
