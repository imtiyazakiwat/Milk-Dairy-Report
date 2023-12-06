function submitForm() {
    // Get form values
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const litres = document.getElementById('litres').value;
    
    // Handle checkboxes
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');
    
    // Check if the checkboxes exist before trying to access their 'checked' property
    const checkbox1Value = checkbox1 ? checkbox1.checked : false;
    const checkbox2Value = checkbox2 ? checkbox2.checked : false;

    // Do whatever you need with the form values (e.g., calculation)

    // For now, let's log the values to the console
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Litres:', litres);
    console.log('Checkbox 1:', checkbox1Value);
    console.log('Checkbox 2:', checkbox2Value);

    // You can add more logic here based on your requirements
}
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
