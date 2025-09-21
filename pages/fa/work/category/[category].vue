<script setup>
import data_Portf from "@/api/fa/portfolio/portfolio.json";
import LinkAngle from "@/components/links/LinkAngle.vue";
import PortfolioFilterFa from "@/components/portfolio/PortfolioFilterFa.vue";
import DsnFooterFa from "~/components/footer/DsnFooterFa.vue";
definePageMeta({ documentDriven: false });
const { category } = useRoute().params

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

	<Head>
		<Title>لیست کار 1</Title>
	</Head>

	<Layout name="fa-default" bodyStyle="bg-dots">
		<!-- ========== Header Normal============= -->
		<HeaderNormal contentClass="container" subTitle="" btnScrollTo="portfolio">
			<template v-slot:title>{{category}}</template>
			<template v-slot:string>آژانس طراحی حرفه‌ای برای ارائه راه‌حل‌ها</template>
			<LinkAngle linkNameClass="heading-color" classColor="section" linkName="همین حالا شروع کن"
				linkTo="/fa/contact" />
		</HeaderNormal>
		<!-- ========== End Header Normal ======== -->

		<!-- ========== Portfolio ================ -->
			 <PortfolioFilterFa :filterCat="category.toString().toLowerCase().trim()" id="portfolio" class="container" :data="data_Portf" :useFilter="false"
				 setStyle="cards-1"/>

		<!-- ========== End Portfolio ============ -->

		<!-- ========== Footer =================== -->
		<DsnFooterFa light animate />
		<!-- ========== End Footer =============== -->
	</Layout>
</template>

