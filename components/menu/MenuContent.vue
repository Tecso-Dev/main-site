<template>
	<div class="container-content d-flex flex-column justify-content-center">
		<div class="nav__info">
			<div class="nav-content">
				<h5 class="sm-title-block mb-10">Head Office</h5>
				<p>
					West Azarbayjan - Urmia <br> Bra'ati Street - Asatid Building - P 6 <br> Iran 
				</p>
			</div>
			<div class="nav-content mt-30">
				<h5 class="sm-title-block mb-10">Contact</h5>
				<p class="links over-hidden mb-1">
						<NuxtLink to="tel:+989058432452">+98 905 843 2452</NuxtLink><br>
						<NuxtLink to="tel:+989199891447">+98 919 989 1447</NuxtLink><br>
						<NuxtLink to="tel:+989927461899">+98 992 746 1899</NuxtLink>

				</p>
				<p class="links over-hidden">
					<a class="link-hover" href="mailto:info@Tecso.team">info@Tecso.team</a>
				</p>
			</div>
		</div>
		<div class="nav-social nav-content mt-30">
			<div class="nav-social-inner p-relative">
				<h5 class="sm-title-block mb-10">Follow us</h5>
				<ul>
					<li v-if="socialData.length > 0" v-for="(item,index) in socialData" :key="index">
						<a :href="item.link" target="_blank" rel="nofollow noopener noreferrer">{{ item.name }}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
const socialData = [
	{ link: "#0",name: "Dribbble." },
	{ link: "#0",name: "Behance." },
	{ link: "#0",name: "Linkedin." },
	{ link: "#0",name: "Twitter." },
];
</script>

<style lang="scss">
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
.container-content {
	display: flex !important;
	position: relative;
	opacity: 0;
	visibility: hidden;

	&:after,
	& {
		transition: 1s;
	}

	&:after {
		content: "";
		position: absolute;
		background-color: $border-color;

		@include media_991(min) {
			left: calc(-1 * var(--dsn-gap-container));
			top: 0;
			width: 1px;
			height: 0;
		}

		@include media_991() {
			width: 0;
			height: 1px;
		}
	}

	.sm-title-block {
		color: #a56433;
	}

	.nav-social ul li {
		position: relative;
		color: $heading-color;
		display: inline-block;
		letter-spacing: 2px;
		font-size: 14px;
		margin-right: 15px;
		padding-right: 5px;
	}
}

.dsn-open .container-content {
	opacity: 1;
	visibility: visible;

	@include media_991(min) {
		&:after {
			height: 100%;
		}
	}

	@include media_991() {
		&:after {
			width: 100%;
			top: calc(-1 * #{$margin-padding} / 2);
		}
	}

	&:after,
	& {
		transition-delay: 0.7s;
	}
}
</style>
