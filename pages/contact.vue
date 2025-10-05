<script setup>
import DsnMap from '@/components/contact/DsnMap.vue';
import DsnFooter from '@/components/footer/DsnFooter.vue';
</script>

<template>

    <Head>
        <Title>Contact</Title>
    </Head>

    <Layout>
        <!-- ========== Header Normal=============== -->
        <HeaderNormal contentClass="container" subTitle="" :linkTo="$route.path" linkName="See More Works">
            <template v-slot:title>
                Look around you<br> everything is changing.
            </template>
            <template v-slot:string>
                What if the time has come for you to change? Starting a collaboration is easy! Order a
                free consultation or call back. We are always in touch and happy to cooperate with you
            </template>
        </HeaderNormal>
        <!-- ========== End Header Normal ========== -->

        <!-- ========== Contact  =================== -->
        <contactForm>
            <template v-slot:form_title>IF YOU HAVE QUESTIONS PLEASE <br>CONTACT US</template>
            <template v-slot:address_title>Head Office:</template>
            <template v-slot:address>West Azarbayjan - Urmia <br> Bra'ati Street - Asatid Building - P 6<br> Iran</template>
            <template v-slot:phones_title>Phones:</template>
            <template v-slot:phones>
                <NuxtLink to="tel:+989058432452">+98 905 843 2452 (CEO - Sobhan)</NuxtLink><br>
                <NuxtLink to="tel:+989144454463">+98 914 445 4463 (COD - Ashkan)</NuxtLink><br>
                <NuxtLink to="tel:+989922068945">+98 992 206 8945 (Telegram)</NuxtLink>
            </template>
            <template v-slot:email_title>Write Us:</template>
            <template v-slot:email>
                <NuxtLink to="mailto:tecsoteam@gmail.com">tecsoteam@gmail.com</NuxtLink>
            </template>
        </contactForm>
        <!-- ========== End Contact  =============== -->

        <!-- ========== Map  ======================= -->
        <DsnMap mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg" :zoom="16" height="80vh"
            :defaultCenter="{ lat: 37.5310850, lng: 45.0808324}" />
        <!-- ========== End Map  =================== -->

        <!-- ========== Footer ===================== -->
        <DsnFooter :animateContent="false" />
        <!-- ========== End Footer ================= -->

    </Layout>
</template>
