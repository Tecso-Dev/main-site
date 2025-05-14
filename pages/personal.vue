<script setup>
import data_Personal from "@/api/personal/personal.json";
import data_Serve from "@/api/services/service.json";
import data_Portf from "@/api/portfolio/portfolio.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import data_blogs from "@/api/blog/blog.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
import BoxImage from "@/components/box-image/BoxImage.vue";
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
const personal = 0;
</script>

<template>

	<Head>
		<Title>شخصی - {{ data_Personal[personal].name }}</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== هدر شخصی ========== -->
		<HeaderPersonal :data="data_Personal[personal]"></HeaderPersonal>
		<!-- ========== پایان هدر شخصی ========== -->

		<!-- ========== بخش درباره ما ========== -->
		<AboutPersonal :data="data_Personal[personal]" subTitle="درباره ما" title="چه کاری می توانم انجام دهم" />
		<!-- ========== پایان بخش درباره ما ========== -->

		<!-- ========== خدمات ========== -->
		<ServiceStyle :data="data_Serve.slice(0, 3)" titleClass="border-bottom border-top pt-20 pb-20 mb-20"
			serviceInnerClass="background-section" iconsize="80px" masonry center>
			<template v-slot:title>
				<SectionTitle center subTitle="مزایا" title="بیایید خدمات ما را بررسی کنیم" beforeStyle=""
					:spaceDown="true" titleClass="background-theme p-10" />
			</template>
		</ServiceStyle>
		<!-- ========== پایان خدمات ========== -->

		<PortfolioHorizontalScroll :data="data_Portf" />

		<!-- ========== تصویر جعبه پس زمینه ========== -->
		<BoxImage imageSrc="images/about-4.webp">
			<h3 class="title-h2 text-upper">
				آیا برای عکاسی حرفه ای به کمک نیاز دارید؟ <br />
				<b>بیایید با هم کار کنیم!</b>
			</h3>
			<p class="mt-30 max-w570">
				در کارم سعی می کنم تعادل مناسبی بین فرم و عملکرد پیدا کنم.
				از نقشه های فنی گرفته تا رندرهای عکاسی و
				بازنمایی واقعی کار من به عنوان یک طراح، فلسفه من
				سادگی است.
				<span class="mb-10 d-block"></span>
				در عین حال، سبک من کاملاً متعلق به خودم است – بدون شلوغی، با اشکال
				تمیز و راه حل های مدرن صرفه جویی در فضا.
			</p>
			<LinkDefualt linkClass="background-section" :iconAwesome="['far', 'envelope-open']" popup
				linkName="تماس با ما" linkTo="/contact" parallax />
		</BoxImage>
		<!-- ========== پایان تصویر جعبه پس زمینه ========== -->

		<!-- ========== نظرات مشتریان =============== -->
		<div class="background-section section-padding">
			<Testimonials :data="data_Teste" :stringLine="1" className="container  " slideClass="border-style"
				boxStyle="center" Pagination loop :speed="1200" grabCursor
				:desktop="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }"
				:tablet="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }"
				:mobile="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }">
				<template v-slot:title>
					<SectionTitle center subTitle="نظرات مشتریان" title="مردم چه می گویند" beforeStyle=""
						titleClass="background-theme p-10" />
				</template>
			</Testimonials>
		</div>

		<!-- ========== پایان نظرات مشتریان =========== -->

		<!-- ========== داستان ها ==================== -->
		<BlogSwiper setStyle="cards" :data="data_blogs" allowPrevButton allowNextButton allowPagination grabCursor
			parallax loop :speed="1200" :desktop="{ slidesPerView: 1, spaceBetween: 30 }"
			:tablet="{ slidesPerView: 1, spaceBetween: 30 }" :mobile="{ slidesPerView: 1, spaceBetween: 30 }">
			<template v-slot:title>
				<SectionTitle center subTitle="آخرین پست" title="جدیدترین و بهترین پست" beforeStyle=""
					:spaceDown="true" titleClass="background-theme p-10" />
			</template>
		</BlogSwiper>
		<!-- ========== پایان داستان ها ================ -->

		<!-- ========== فوتر ============== -->
		<DsnFooter light animate />
		<!-- ========== پایان فوتر ========== -->
	</Layout>
</template>
