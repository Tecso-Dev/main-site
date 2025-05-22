<script setup>
import { nextProject } from "@/hooks/plugin.js";
import data_blogs from "@/api/fa/blog/blog.json";
import PostData from "@/components/blog/PostData.vue";
import PostPagination from "@/components/blog/PostPagination.vue";
import DsnFooterFa from "@/components/footer/DsnFooterFa.vue";
import PostCommentsFa from "~/components/blog/PostCommentsFa.vue";
import PostPaginationFa from "~/components/blog/PostPaginationFa.vue";
definePageMeta({ documentDriven: false });
const { slug } = useRoute().params;
const item = await data_blogs.find((item) => item.slug === slug);

if (!item) {
    throw createError({
        fatal: true,
        statusCode: 404,
        statusMessage: "پست یافت نشد",
        data: {
            msg: useRoute().path,
            redirectLink: "fa/blog/stories",
            linkName: "Blog",
        },
    });
}

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>پست - {{ item.title }}</Title>
    </Head>

    <NuxtLayout name="fa-default">
        <HeaderSinglePost :data="item" btnScrollTo="" />
        <PostData :data="item" />
        <PostPaginationFa :data="data_blogs" />
        <PostCommentsFa :data="item" />
        <DsnFooterFa light animate />
    </NuxtLayout>
</template>
