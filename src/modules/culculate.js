const culculate = (price = 100) => {
	const culcBlock = document.querySelector('#calc');
	if (culcBlock) {
		const squareCulcInput = document.querySelector('#calc-input');
		const culcInputBulcony = document.querySelector('#calc-type');
		const culcInputMaterial = document.querySelector('#calc-type-material');
		let totalCulc = document.querySelector('#total');

		squareCulcInput.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/gi, '')
		})

		const countCulc = () => {
			let valueBulcony = +culcInputBulcony.options[culcInputBulcony.selectedIndex].value;
			let valueMaterial = +culcInputMaterial.options[culcInputMaterial.selectedIndex].value;
			let valueSquare = +squareCulcInput.value;
			let totalValue = 0;

			if (culcInputBulcony.value && culcInputMaterial.value && squareCulcInput.value) {
				totalValue = price * valueBulcony * valueMaterial * valueSquare;
			} else {
				totalValue = 0;
			}
			totalCulc.value = totalValue;
		}
		culcBlock.addEventListener('input', (e) => {
			countCulc()
		})
	}
}
export default culculate