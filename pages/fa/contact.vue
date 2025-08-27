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
            <template v-slot:address>آذربایجان غربی<br>ارومیه<br> خیابان براعتی، ساختمان اساتید، پلاک 6</template>
            <template v-slot:phones_title>تلفن:</template>
            <template v-slot:phones>
                <NuxtLink to="tel:+989058432452">+98 905 843 2452</NuxtLink><br>
                <NuxtLink to="tel:+989199891447">+98 919 989 1447</NuxtLink><br>
                <NuxtLink to="tel:+989927461899">+98 992 746 1899</NuxtLink>
            </template>
            <template v-slot:email_title>برای ما بنویسید:</template>
            <template v-slot:email>
                <NuxtLink to="mailto: info@Tecso.team"> info@Tecso.team</NuxtLink>
            </template>
        </ContactFormFa>
        <!-- ========== End Contact  =============== -->

        <!-- ========== Map  ======================= -->
        <DsnMap mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg" :zoom="15" height="80vh"
            :defaultCenter="{lat: 37.530920, lng:  45.080904 }" />
        <!-- ========== End Map  =================== -->

        <!-- ========== Footer ===================== -->
        <DsnFooterFa :animateContent="false" />
        <!-- ========== End Footer ================= -->

    </Layout>
</template>
