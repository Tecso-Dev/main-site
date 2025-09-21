<script setup>
import data_blogs from "@/api/blog/blog.json";
import BlogList from "@/components/blog/BlogList.vue"
import DsnFooter from '@/components/footer/DsnFooter.vue';
import ProjectsList from "~/components/blog/ProjectsList.vue";
</script>

<template>

    <Head>
        <Title>Projects</Title>
    </Head>

    <Layout bodyStyle="bg-dots">
        <!-- ========== Header ========== -->
        <HeaderHalf title="Our Projects" :metas="['PROJECTS', 'IDEAS']" btnScrollTo="list" />
        <!-- ========== End Header ========== -->

        <!-- ========== Stories ========== -->
        <ProjectsList id="list" :data="data_blogs" />
        <!-- ========== End Stories ========== -->

        <!-- ========== Footer =================== -->
        <DsnFooter light animate />
        <!-- ========== End Footer =============== -->
    </Layout>
</template>
