<script setup>

const changeLanguage = () => {
	let url = window.location.href;
	const newUrl = url.replace("3000", "3000/fa");
	window.location.replace(newUrl);
};
</script>

<template>
	<div class="en-fa" @click="changeLanguage()">
		<div class="fa active">
			<span class="lan">FA</span>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "@/assets/styles/mixins/mixins-master";
.en-fa {
	position: fixed;
	z-index: 100;
	top: 20px;
	left: 65px;
	width: 30px;
	height: 30px;
	cursor: pointer;
	text-align: center;

	.lan {
		display: flex;
		justify-content: center; /* Centers horizontally */
		align-items: center; /* Centers vertically */
		width: 30px;
		height: 30px;
		color: #000;
	}

	.title-mode {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		margin-top: 10px;
		letter-spacing: 7px;
		background-color: $assistant-color;
		width: 40px;
		margin-left: -5px;
		padding-bottom: 10px;
		border-radius: 0 0 15px 15px;
		line-height: 38px;

		&:before {
			content: "";
			position: absolute;
			left: -5px;
			top: -10px;
			height: 50px;
			width: 40px;
			background-color: inherit;
			z-index: -1;
			border-radius: 15px 15px 0 0;
		}
	}

	@include media_991 {
		top: 30px;
		left: 200px;
		display: none;
	}

	@include media_768 {
		top: 50px;
		left: 150px;
		display: none;
	}

	.en,
	.fa {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		transition: opacity 0.2s;
		border-radius: 100%;
		opacity: 0;

		.lan {
			width: 100%;
			height: 100%;
		}
	}

	.en {
		border: 1px solid rgba(255, 255, 255, 0.18);
		background-color: #fff;
		opacity: 1;

		.lan {
			fill: #000;
			width: 100%;
			height: 100%;
		}
	}

	.fa {
		border: 1px solid rgba(255, 255, 255, 0.18);
		background-color: #fff;
		opacity: 1;

		.lan {
			fill: #000;
			width: 100%;
			height: 100%;
		}
	}

}
</style>
