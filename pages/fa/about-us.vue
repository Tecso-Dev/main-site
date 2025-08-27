<script setup>
import data_Team from "@/api/fa/team/team.json";
import data_Teste from "@/api/fa/testimonials/testimonials.json";
import data_Brand from "@/api/fa/brands/brand.json";
import data_Serve from "@/api/fa/services/service.json";
import LinkAngle from "@/components/links/LinkAngle.vue"

import SectionTitle from "@/components/title/SectionTitle.vue";
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import DsnFooterFa from "~/components/footer/DsnFooterFa.vue";
const pageStyle = { titleBeforeStyle: "circle-after", };

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>درباره ما</Title>
    </Head>

    <Layout name="fa-default">
        <!-- ========== Header Normal============= -->
        <HeaderNormal contentClass="container" subTitle="" btnScrollTo="about">
            <template v-slot:title>
                آژانس دیجیتالی که <br />با موفقیت شما شکوفا میشود
            </template>
            <template v-slot:string>
                اگر به دنبال آژانسی هستید که به شما در ایجاد حضوری چشمگیر در فضای آنلاین کمک کند، به جای درستی آمده‌اید. ما می‌توانیم به شما کمک کنیم تا کسب و کارتان را به سطح بالاتری ببرید.
            </template>
            <LinkAngle classColor="section" linkName="همین الان شروع کن" linkTo="/fa/contact" />
        </HeaderNormal>
        <!-- ========== End Header Normal ======== -->

        <!-- ========== About Section ============ -->
        <AboutSection id="about" imageSrc="images/about-5.webp">
            <template v-slot:title>به میلیون ها نفر کمک کنید تا <br />پروژه های خلاقانه خود را به واقعیت تبدیل کنند</template>
            <template v-slot:string>در هسته ما ، ما معتقدیم که هر ایده سزاوار فرصتی برای رشد و تأثیرگذاری است. مأموریت ما این است که با ارائه ابزارها ، تخصص ها و پشتیبانی مورد نیاز خود برای زنده کردن پروژه های خلاقانه خود ، میلیون ها نفر از افراد ، کارآفرینان و مشاغل را توانمند کنیم. این که آیا در حال ساخت محصولات دیجیتالی نوآورانه ، طراحی تجربیات کاربر پسند یا توسعه راه حل های قدرتمند وب است ، ما اختصاص داده ایم که تخیل را به واقعیت تبدیل کنیم و به رویاها کمک کنیم تا در دنیای مدرن شکل بگیرد.
            </template>
        </AboutSection>
        <!-- ========== End About Section ======== -->

        <!-- ========== Service ================== -->
        <ServiceStyle :data="data_Serve.slice(0, 6)" counter :masonry="false" center
            serviceInnerClass="border-style" iconsize="80px" :haveButton="false" fadeUp>
            <template v-slot:title>
                <SectionTitle subTitle="مزایا" title="بریم که خدمات ما را بررسی کنیم" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </ServiceStyle>
        <!-- ========== End Service ============== -->

        <!-- ========== Team ===================== -->
        <Team :data="data_Team.slice(0, 3)" class="dsn-right-container" grid="grid-md-3 grid-sm-2">
            <template v-slot:title>
                <SectionTitle subTitle="تیم ما" title="بهترین تیم تاریخ!"
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Team>
        <!-- ========== End Team ================= -->

        <!-- ========== testimonials ============= -->
        <Testimonials :data="data_Teste" :stringLine="1" className="section-margin" slideClass="border-style" Pagination
            spaceBetween="30" :desktop="{ slidesPerView: 2 }" :tablet="{ slidesPerView: 2 }"
            :mobile="{ slidesPerView: 1 }" grabCursor :centeredSlides="false" loop :speed="1200">
            <template v-slot:title>
                <SectionTitle subTitle="توصیفات" title="چیزی که افراد میگوند" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Testimonials>
        <!-- ========== End testimonials ========= -->

        <!-- ========== Brand ==================== -->
        <Brand :data="data_Brand.slice(0, 8)">
            <template v-slot:title>
                <SectionTitle subTitle="مشتری های ما" title="موفقیت شما، اعتبار ما" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Brand>
        <!-- ========== End Brand ================ -->

        <!-- ========== Footer =================== -->
        <DsnFooterFa light animate />
        <!-- ========== End Footer =============== -->
    </Layout>
</template>


