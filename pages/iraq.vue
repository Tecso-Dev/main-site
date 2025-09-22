<template>
  <div class="regional-page">
    <!-- SEO Components -->
    <SeoHead />
    <StructuredData />
    <GeoSeo />
    <GoogleMyBusiness />
    
    <!-- Regional Header -->
    <section class="hero-section bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          خدمات تکنولوژی دیجیتال در عراق
          <br>
          <span class="text-yellow-400">Tecso Team</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
          ما در Tecso Team، خدمات توسعه نرم‌افزار و راه‌کارهای دیجیتال حرفه‌ای را برای کسب‌وکارهای عراقی ارائه می‌دهیم
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition">
            تماس با ما
          </NuxtLink>
          <NuxtLink to="/portfolio" class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition">
            مشاهده نمونه کارها
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services for Iraq Market -->
    <section class="services-section py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            خدمات ویژه برای بازار عراق
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            ما متخصص ارائه راه‌کارهای تکنولوژی مناسب برای کسب‌وکارهای عراقی هستیم
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Web Development -->
          <div class="service-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <div class="icon mb-4">
              <i class="fas fa-code text-blue-600 text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">توسعه وب سایت</h3>
            <p class="text-gray-600">
              طراحی و توسعه وب‌سایت‌های مدرن و ریسپانسیو با پشتیبانی از زبان عربی
            </p>
          </div>

          <!-- Mobile Apps -->
          <div class="service-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <div class="icon mb-4">
              <i class="fas fa-mobile-alt text-green-600 text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">اپلیکیشن موبایل</h3>
            <p class="text-gray-600">
              توسعه اپلیکیشن‌های iOS و Android برای کسب‌وکارهای عراقی
            </p>
          </div>

          <!-- E-commerce -->
          <div class="service-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <div class="icon mb-4">
              <i class="fas fa-shopping-cart text-purple-600 text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">فروشگاه آنلاین</h3>
            <p class="text-gray-600">
              راه‌اندازی فروشگاه‌های آنلاین با درگاه‌های پرداخت محلی
            </p>
          </div>

          <!-- Digital Marketing -->
          <div class="service-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <div class="icon mb-4">
              <i class="fas fa-bullhorn text-red-600 text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">دیجیتال مارکتینگ</h3>
            <p class="text-gray-600">
              بازاریابی دیجیتال و بهینه‌سازی برای موتورهای جستجو در منطقه
            </p>
          </div>

          <!-- UI/UX Design -->
          <div class="service-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <div class="icon mb-4">
              <i class="fas fa-paint-brush text-orange-600 text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">طراحی UI/UX</h3>
            <p class="text-gray-600">
              طراحی تجربه کاربری مناسب برای فرهنگ و نیازهای کاربران عراقی
            </p>
          </div>

          <!-- Support -->
          <div class="service-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <div class="icon mb-4">
              <i class="fas fa-headset text-teal-600 text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">پشتیبانی ۲۴/۷</h3>
            <p class="text-gray-600">
              پشتیبانی کامل و مستمر پروژه‌ها با تیم متخصص
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us for Iraq -->
    <section class="why-us-section py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            چرا Tecso Team برای کسب‌وکار شما در عراق؟
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="feature-item flex items-start space-x-4 rtl:space-x-reverse">
            <div class="icon-wrapper bg-blue-100 p-3 rounded-full">
              <i class="fas fa-globe text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">درک عمیق از بازار منطقه</h3>
              <p class="text-gray-600">
                تجربه کار با کسب‌وکارهای خاورمیانه و درک نیازهای محلی
              </p>
            </div>
          </div>

          <div class="feature-item flex items-start space-x-4 rtl:space-x-reverse">
            <div class="icon-wrapper bg-green-100 p-3 rounded-full">
              <i class="fas fa-language text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">پشتیبانی چندزبانه</h3>
              <p class="text-gray-600">
                ارائه خدمات به زبان‌های فارسی، عربی، انگلیسی و ترکی
              </p>
            </div>
          </div>

          <div class="feature-item flex items-start space-x-4 rtl:space-x-reverse">
            <div class="icon-wrapper bg-purple-100 p-3 rounded-full">
              <i class="fas fa-rocket text-purple-600 text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">تکنولوژی‌های روز</h3>
              <p class="text-gray-600">
                استفاده از جدیدترین تکنولوژی‌ها و بهترین practices
              </p>
            </div>
          </div>

          <div class="feature-item flex items-start space-x-4 rtl:space-x-reverse">
            <div class="icon-wrapper bg-red-100 p-3 rounded-full">
              <i class="fas fa-handshake text-red-600 text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">شراکت بلندمدت</h3>
              <p class="text-gray-600">
                تمرکز بر ایجاد روابط بلندمدت و رشد مستمر کسب‌وکار شما
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="cta-section py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          آماده شروع پروژه بعدی شما هستیم
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          با تیم Tecso تماس بگیرید و پروژه دیجیتال خود را به بهترین شکل پیاده‌سازی کنید
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="btn bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition">
            درخواست مشاوره رایگان
          </NuxtLink>
          <a href="tel:+989058432452" class="btn border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition">
            تماس تلفنی
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta for Iraq regional page
useHead({
  title: 'خدمات توسعه نرم‌افزار در عراق | Tecso Team',
  meta: [
    {
      name: 'description',
      content: 'Tecso Team ارائه دهنده خدمات حرفه‌ای توسعه نرم‌افزار، طراحی وب‌سایت و اپلیکیشن موبایل برای کسب‌وکارهای عراقی. تماس با ما برای مشاوره رایگان.'
    },
    {
      name: 'keywords',
      content: 'توسعه نرم افزار عراق, طراحی وب سایت بغداد, اپلیکیشن موبایل عراق, شرکت تکنولوژی عراق, دیجیتال مارکتینگ عراق'
    },
    {
      property: 'og:title',
      content: 'خدمات توسعه نرم‌افزار در عراق | Tecso Team'
    },
    {
      property: 'og:description', 
      content: 'راه‌کارهای دیجیتال حرفه‌ای برای کسب‌وکارهای عراقی - وب‌سایت، اپلیکیشن، فروشگاه آنلاین'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:locale',
      content: 'fa_IR'
    },
    {
      property: 'og:locale:alternate',
      content: 'ar_IQ'
    },
    {
      name: 'geo.region',
      content: 'IQ'
    },
    {
      name: 'geo.placename',
      content: 'Iraq, Baghdad'
    },
    {
      name: 'geo.position',
      content: '33.3152;44.3661'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://tecso.team/iraq'
    },
    {
      rel: 'alternate',
      hreflang: 'fa',
      href: 'https://tecso.team/fa/iraq'
    },
    {
      rel: 'alternate', 
      hreflang: 'ar',
      href: 'https://tecso.team/ar/iraq'
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://tecso.team/iraq'
    }
  ]
})
</script>

<style scoped>
.btn {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
}

.regional-page {
  direction: rtl;
  text-align: right;
}

.regional-page h1,
.regional-page h2,
.regional-page h3 {
  font-family: 'Vazir', 'Tahoma', sans-serif;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section p {
    font-size: 1.1rem;
  }
}
</style>