<div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-8">
	<div class="flex items-start self-start">
		<slot name="navigation" />
	</div>
	<div class="flex justify-center mb-8">
		<slot name="header" />
	</div>
	<slot name="content" />
</div>
