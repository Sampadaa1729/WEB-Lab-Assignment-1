document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const event = document.getElementById('event').value;

    // Create XML structure
    const xmlData = `
        <registration>
            <name>${name}</name>
            <email>${email}</email>
            <phone>${phone}</phone>
            <event>${event}</event>
        </registration>
    `;

    // Store XML data in localStorage
    localStorage.setItem('registrationData', xmlData);

    // Display XML data
    document.getElementById('output').textContent = xmlData;
});
