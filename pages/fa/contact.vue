<script setup>
import DsnMap from '@/components/contact/DsnMap.vue';
import DsnFooterFa from '@/components/footer/DsnFooterFa.vue';

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>تماس با ما</Title>
    </Head>

    <Layout name="fa-default">
        <!-- ========== Header Normal=============== -->
        <HeaderNormal contentClass="container" subTitle="" :linkTo="$route.path" linkName="See More Works">
            <template v-slot:title>
                به اطرافت نگاه کن<br> همه چیز در حال تغییر است.
            </template>
            <template v-slot:string>
                اگر زمان تغییر شما فرا رسیده باشد چه؟ شروع همکاری آسان است! یک مشاوره رایگان سفارش دهید یا دوباره تماس بگیرید. ما همیشه در تماس هستیم و از همکاری با شما خوشحال می‌شویم.
            </template>
        </HeaderNormal>
        <!-- ========== End Header Normal ========== -->

        <!-- ========== Contact  =================== -->
        <ContactFormFa>
            <template v-slot:form_title>اگر سوالی دارید لطفا با ما تماس بگیرید </template>
            <template v-slot:address_title>دفتر مرکزی:</template>
            <template v-slot:address>آذربایجان غربی<br>ارومیه</template>
            <template v-slot:phones_title>تلفن:</template>
            <template v-slot:phones>
                <NuxtLink to="tel:+1850344066">+1 (850) 344 066</NuxtLink>
            </template>
            <template v-slot:email_title>برای ما بنویسید:</template>
            <template v-slot:email>
                <NuxtLink to="mailto:info@dsngrid.com">info@dsngrid.com</NuxtLink>
            </template>
        </ContactFormFa>
        <!-- ========== End Contact  =============== -->

        <!-- ========== Map  ======================= -->
        <DsnMap mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg" :zoom="10" height="80vh"
            :defaultCenter="{ lat: 30.0489206, lng: 31.258553 }" />
        <!-- ========== End Map  =================== -->

        <!-- ========== Footer ===================== -->
        <DsnFooterFa :animateContent="false" />
        <!-- ========== End Footer ================= -->

    </Layout>
</template>
