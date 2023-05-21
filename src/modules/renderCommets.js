export const renderCommets = (blockComments) => {
	blockComments.insertAdjacentHTML('beforeend',
`<div class="review-margin-bottom row comments-item">
	<div class="col-xs-3 col-sm-2">
		<div class="review-user"></div>
	</div>
	<div class="col-xs-9 col-sm-9">
		<div class="review-inner review-green review-arrow review-arrow-left">
			<p class="text-normal"></p>
			<p></p>
		</div>
	</div>
</div>

<div class="review-margin-bottom row comments-item">
<div class="col-xs-9 col-sm-9">
	<div class="review-inner review-gray review-arrow review-arrow-right">
		<p class="text-normal"></p>
		<p></p>
	</div>
</div>
<div class="col-xs-3 col-sm-2">
	<div class="review-user"></div>
</div>
</div>

<div class="row comments-item">
<div class="col-xs-3 col-sm-2">
	<div class="review-user"></div>
</div>
<div class="col-xs-9 col-sm-9">
	<div class="review-inner review-orange review-arrow review-arrow-left">
			<p class="text-normal"></p>
			<p></p>
</div>
</div>`
	)
}