const documents = () => {
	const closeModal = document.querySelector('.closeBlock');
	const modalDocuments = document.querySelector('.modal-overlay');
	const sertificates = document.querySelectorAll('.sertificate-document');

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
	closeModal.addEventListener('click', () => {
		modalDocuments.style.display = 'none';
	})
}
export default documents