window.onload = function() {
    // Retrieve XML data from localStorage
    const xmlData = localStorage.getItem('registrationData');
    if (xmlData) {
        // Parse XML data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        // Extract data from XML
        const name = xmlDoc.getElementsByTagName('name')[0].textContent;
        const email = xmlDoc.getElementsByTagName('email')[0].textContent;
        const phone = xmlDoc.getElementsByTagName('phone')[0].textContent;
        const event = xmlDoc.getElementsByTagName('event')[0].textContent;

        // Create table row
        const tableBody = document.getElementById('registrationTable').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();

        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const phoneCell = newRow.insertCell(2);
        const eventCell = newRow.insertCell(3);

        nameCell.textContent = name;
        emailCell.textContent = email;
        phoneCell.textContent = phone;
        eventCell.textContent = event;
    }
};
