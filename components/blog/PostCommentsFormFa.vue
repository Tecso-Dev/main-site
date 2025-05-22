<script setup></script>

<template>
	<div class="comments-form dsn-form">
		<slot />
		<form id="contact-form" class="form w-100" method="post" data-toggle="validator">
			<div class="messages"></div>
			<div class="input__wrap controls">
				<div class="d-grid grid-md-2">
					<div class="form-group dsn-up">
						<div class="entry-box">
							<input id="form_name" type="text" name="name" placeholder="نام خود را وارد کنید ..."
								required data-error="نام نیاز است" autocomplete="off"/>
						</div>
						<div class="help-block with-errors"></div>
					</div>
					<div class="form-group dsn-up">
						<div class="entry-box">
							<input id="form_email" type="email" name="email" placeholder="ایمیل خود را وارد کنید ..."
								required data-error="ایمیل معتبر نیاز است!" autocomplete="off"/>
						</div>
						<div class="help-block with-errors"></div>
					</div>
				</div>
				<div class="form-group dsn-up">
					<div class="entry-box">
						<textarea id="form_message" class="form-control" name="message" rows="7"
							placeholder="از خودت و دنیا بگو" required
							data-error="لطفا، پیغامی وارد کنید"></textarea>
					</div>
					<div class="help-block with-errors"></div>
				</div>
				<div class="d-flex dsn-up">
					<div class="image-zoom move-circle border-color-default border-style border-rdu"
						data-dsn="parallax">
						<input type="submit" value="پست کردن کامنت" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>


