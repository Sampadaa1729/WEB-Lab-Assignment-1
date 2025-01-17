document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Create XML data
    const xmlData = `
    <registration>
        <name>${name}</name>
        <email>${email}</email>
        <phone>${phone}</phone>
    </registration>
    `;
    
    // Display XML data in a <pre> tag
    document.getElementById('output').textContent = xmlData;
    
    // Optional: Save XML to a server or file (this requires a server-side script)
});
