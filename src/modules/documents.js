const documents = () => {
	const closeModal = document.querySelector('.closeBlock');
	const modalDocuments = document.querySelector('.modal-overlay');
	const sertificates = document.querySelectorAll('.sertificate-document');
	const modalContent = document.querySelector('.modal-content')
	console.log(modalContent);

	sertificates.forEach(sertificate => {
		let zoomDocuments = sertificate.querySelector('.document-overlay');
		sertificate.addEventListener('mouseover', (e) => {
			e.preventDefault()
			zoomDocuments.style.opacity = '1';
		})

		sertificate.addEventListener('click', (e) => {
			e.preventDefault()
			modalDocuments.style.display = 'block';
		})
		sertificate.addEventListener('mouseout', (e) => {
			e.preventDefault()
			zoomDocuments.style.opacity = '0';
		})
	})
	
	modalDocuments.addEventListener('click', (e) => {
		if(!e.target.closest('.modal-content') || e.target.closest('.closeBlock')){
			modalDocuments.style.display = 'none';
		}
	})
	
}
export default documents