<script setup>
import data_Personal from "@/api/fa/personal/personal.json"
import data_Serve from "@/api/fa/services/service.json";
import data_Portf from "@/api/fa/portfolio/portfolio.json"
import SectionTitle from "@/components/title/SectionTitle.vue";
import SectionTitlePin from "@/components/title/SectionTitlePin.vue";
import Skills from "@/components/skills/Skills.vue"
import SkillProgressBar from "@/components/skills/SkillProgressBar.vue"
import ExperienceList from "@/components/experience/ExperienceList.vue"
import HeaderResumeFa from "@/components/header/HeaderResumeFa.vue"
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import SectionData from "@/components/sections/SectionData.vue"
import PortfolioFilterFa from "@/components/portfolio/PortfolioFilterFa.vue"
import DsnFooterFa from "@/components/footer/DsnFooterFa.vue";
const personal = 1

definePageMeta({
  layout: 'fa-default'
});
</script>

<template>

    <Head>
        <Title>رزومه</Title>
    </Head>

    <Layout name="fa-default" bodyStyle="bg-dots">

        <!-- ========== Header ========== -->
        <HeaderResumeFa :data="data_Personal[personal]" btnScrollTo="about" />
        <!-- ========== End Header ========== -->

        <!-- ========== About Section ========== -->
        <AboutResume id="about" :data="data_Personal[personal]">
            <template v-slot:title>
                <SectionTitle center subTitle="" title="اطلاعات اصلی درباره من<br> و کارهایی که دوست دارم انجام دهم." spaceDown>
                    <p class="max-w750 mt-20">
                        {{ data_Personal[personal].about[1] }}
                    </p>
                </SectionTitle>
            </template>
        </AboutResume>
        <!-- ========== End About Section ========== -->

        <!-- ========== Service ================== -->
        <ServiceStyle class="border-top pt-section" :data="data_Serve.slice(0,3)" :masonry="false" center
            serviceInnerClass="border-style" iconsize="80px" :haveButton="false" fadeUp>
            <template v-slot:title>
                <SectionTitle subTitle="" title="بریم که خدماتمون رو بررسی کنیم" center beforeStyle="">
                    <p class="max-w570 mt-20">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </SectionTitle>
            </template>
        </ServiceStyle>
        <!-- ========== End Service ============== -->

        <!-- ========== Skills ========== -->
        <SectionData>
            <template v-slot:title>
                <SectionTitlePin title="مهارت های من">
                    <p class="max-w350 mt-20">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است     
                    </p>
                </SectionTitlePin>
            </template>
            <template v-slot:items>
                <Skills id="skills" class="d-grid">
                    <SkillProgressBar v-for="(skill,index) in data_Personal[personal].skills" :key="index"
                        :data="skill" />
                </Skills>
            </template>
        </SectionData>
        <!-- ========== End skills ========== -->

        <!-- ========== Experience ========== -->
        <SectionData>
            <template v-slot:title>
                <SectionTitlePin title="تجربه های قبلی من">
                    <p class="max-w350 mt-20">
                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </SectionTitlePin>
            </template>
            <template v-slot:items>
                <ExperienceList>
                    <ExperienceItem v-for="(ex,index) in data_Personal[personal].experience" :key="index" :data="ex" />
                </ExperienceList>
            </template>
        </SectionData>
        <!-- ========== End Experience ========== -->

        <!-- ========== Portfolio ========== -->
        <PortfolioFilterFa class="container" :data="data_Portf" setStyle="cards-1" LinkCircleArrow />
        <!-- ========== End Portfolio ========== -->

        <!-- ========== Contact ========== -->
        <SectionData>
            <template v-slot:title>
                <SectionTitlePin title="تماس با من">
                    <p class="max-w350 mt-0">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </SectionTitlePin>
            </template>
            <template v-slot:items>
                <ContactFormSmallFa />
            </template>
        </SectionData>
        <!-- ========== End Contact ========== -->

        <!-- ========== Footer ======================= -->
        <DsnFooterFa class="container border-top" :animateContent="false" />
        <!-- ========== End Footer =================== -->
    </Layout>
</template>
