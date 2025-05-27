<script setup></script>

<template>
	<h2 class="title-block">اگر سوالی دارید لطفا <br />با ما در تماس باشید</h2>
	<p class="mt-10">فیلدها را پر کنید و به طور تقریبی جواب خود را پیدا کنید</p>
	<div class="dsn-form mt-20 form-box d-flex flex-column">
		<form id="contact-form" class="form w-100" method="post" action="contact.php" data-toggle="validator">
			<div class="messages"></div>
			<div class="input__wrap controls">
				<div class="form-group dsn-up" :data-fade-up="true">
					<div class="entry-box">
						<input id="form_name" type="text" name="name" placeholder="نام خود را وارد کنید" autocomplete="off"
							required="required" data-error="نام ضروری است" />
					</div>
					<div class="help-block with-errors"></div>
				</div>

				<div class="form-group dsn-up" :data-fade-up="true">
					<div class="entry-box">
						<input id="form_email" type="email" name="email" autocomplete="off"
							placeholder="آدرس ایمیل خود را وارد کنید" required="required"
							data-error="ایمیل معتبر ضروری است" />
					</div>
					<div class="help-block with-errors"></div>
				</div>

				<div class="form-group dsn-up" :data-fade-up="true">
					<div class="entry-box">
						<textarea id="form_message" class="form-control" name="message"
							placeholder="از خودت و دنیا بگو" required="required"
							data-error="لطفا، یک پیغامی برای ما بگذارید"></textarea>
					</div>
					<div class="help-block with-errors"></div>
				</div>

				<div class="d-flex justify-content-end dsn-up" :data-fade-up="true">
					<div class="image-zoom move-circle background-theme" data-dsn="parallax">
						<input type="submit" value="ارسال پیام" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

