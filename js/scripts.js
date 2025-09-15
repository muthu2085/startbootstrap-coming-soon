/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Array to store form data objects
const formDataArray = [];

// Get form and display div
const form = document.getElementById('subscribeForm');
const formDataList = document.getElementById('formDataList');

if (form) {
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		// Get form values
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		// Store as object
		const formData = { name, email };
		formDataArray.push(formData);
		// Display all form data using map
		displayFormData();
		// Optionally reset form
		form.reset();
	});
}

function displayFormData() {
	if (!formDataList) return;
	formDataList.innerHTML = '<h5>Submitted Data:</h5>' +
		formDataArray.map((data, idx) =>
			`<div>${idx + 1}. Name: <b>${data.name}</b>, Email: <b>${data.email}</b></div>`
		).join('');
}