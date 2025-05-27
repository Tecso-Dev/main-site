<script setup>
import data_Brand from "@/api/fa/brands/brand-one.json";
import data_ServA from "@/api/fa/services/services_accordion.json";
import data_Team from "@/api/fa/team/team.json";
import data_Serve from "@/api/fa/services/about-services.json";
import data_Teste from "@/api/fa/testimonials/testimonials.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import SectionTitlePin from "@/components/title/SectionTitlePin.vue";
import AboutServices from "@/components/services/AboutServices.vue";
import BrandTwo from "@/components/brand/BrandTwo.vue";
import LinkAngle from "@/components/links/LinkAngle.vue";
import DsnFooterFa from "@/components/footer/DsnFooterFa.vue";

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>خدمات</Title>
    </Head>

    <Layout bodyStyle="bg-dots" name="fa-default">
        <!-- ========== Header Normal ================ -->
        <HeaderNormal contentClass="container" subTitle="خدمات ما">
            <template v-slot:title>
                ما محصولات دیجیتال زیبایی را <br /> برای ما ارائه می دهیم.
            </template>
            <template v-slot:string>
                اگر به دنبال آژانسی هستید که به شما در ایجاد حضوری چشمگیر در فضای آنلاین کمک کند، به جای درستی آمده‌اید. ما می‌توانیم به شما کمک کنیم تا کسب و کارتان را به سطح بالاتری ببرید.
            </template>
            <LinkAngle linkName="همین حالا شروع کن" linkTo="/fa/contact" />
        </HeaderNormal>
        <!-- ========== End Header Normal ============ -->

        <!-- ========== About Section ================ -->
        <AboutServices :data="data_Serve" imageSrc="images/portfolio/project6/2.gif">
            <template v-slot:title>بریم که <b>سرویس هامون رو</b> بررسی کنیم</template>
            <template v-slot:smallBoxTitle>بهترین شیوه‌ها از متخصصان صنعت</template>
            <template v-slot:smallBoxDescription>
                <p>
ما فرهنگی را طراحی کرده‌ایم که به متصدیان ما اجازه می‌دهد تا با مشتریان ما هماهنگ شوند و آنها را به ارمغان بیاورند.   
                </p>
            </template>
        </AboutServices>
        <!-- ========== End About Section ============ -->

        <!-- ========== Info Service ================= -->
        <div class="pt-section mb-section background-section">
            <div class="container">
                <div class="d-grid grid-md-2" data-dsn-gap="30px 60px">
                    <div class="left">
                        <h5 class="title-h2 body-font text-upper">
                            ما بهترین خدمات<b>بازار</b> را به شما ارائه می‌دهیم
                        </h5>
                        <p class="mt-20">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  
                        </p>
                    </div>
                    <div class="right align-self-end">
                        <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        <p class="mt-20">
                            پیش‌فرض و جستجویی برای [عبارت]، وب‌سایت‌های بسیاری را که هنوز در مراحل ابتدایی خود هستند، آشکار خواهد کرد. [عبارت] صفحه وب، با تزریق کلمات طنز، دچار تغییر شده است.
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-relative box-img">
                <div class="p-relative container d-grid grid-1-half mt-50 z-index-2">                    <NuxtImg format="webp" src="images/s1.webp" alt="" />
                    <NuxtImg format="webp" class="d-sm-none" src="images/s2.webp" alt="" />
                </div>

                <div class="dsn-bg-mask background-main h-50 bottom-0 z-index-1"></div>
            </div>
        </div>
        <!-- ========== End Info Service ============= -->

        <!-- ========== About According ============== -->
        <about-according :data="data_ServA.slice(0, 3)">
            <template v-slot:title>
                <SectionTitlePin title="ما از سال ۲۰۰۸ مشغول انجام پروژه‌ها بوده‌ایم.">
                    <p class="max-w570 mt-20">
                        دی‌اس‌ان گرید که در سال ۲۰۰۰ تأسیس شد، به یکی از بهترین آژانس‌های دیجیتال در تم‌فارست تبدیل شده است. با پول آبی به کار خود ادامه دهید، اما به تولید انبوه برسید.
                    </p>
                </SectionTitlePin>
            </template>
        </about-according>
        <!-- ========== End About According ========== -->

        <!-- ========== Team ========================= -->
        <Team :data="data_Team.slice(0, 4)" grid="grid-lg-4 grid-sm-2">
            <template v-slot:title>
                <SectionTitle class="container" subTitle="تیم ما" title="بهترین تیم تاریخ!"
                    beforeStyle="circle-after" />
            </template>
        </Team>
        <!-- ========== End Team ===================== -->

        <!-- ========== Brand ======================== -->
        <BrandTwo :data="data_Brand" />
        <!-- ========== End Brand ==================== -->

        <!-- ========== Testimonials ================= -->
        <Testimonials :data="data_Teste" :stringLine="1" Pagination loop grabCursor :centeredSlides="false"
            className="section-padding background-section" slideClass="background-main" :desktop="{
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            }" :tablet="{
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            }" :mobile="{
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: false,
            }" :speed="1200">
            <template v-slot:title>
                <SectionTitle title="روابطی که بر اساس اعتماد بنا شده‌اند." />
            </template>
        </Testimonials>
        <!-- ========== End Testimonials ============= -->

        <!-- ========== Footer ======================= -->
        <DsnFooterFa animate />
        <!-- ========== End Footer =================== -->
    </Layout>
</template>


