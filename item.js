function submitItemForm() {
    // Get form values
    const itemName = document.getElementById('itemName').value;
    const rate = document.getElementById('rate').value;
    const itemDate = document.getElementById('itemDate').value;
    const qty = document.getElementById('qty').value;

    // Do whatever you need with the form values (e.g., calculation)

    // For now, let's log the values to the console
    console.log('Item Name:', itemName);
    console.log('Rate:', rate);
    console.log('Date:', itemDate);
    console.log('Quantity:', qty);

    // You can add more logic here based on your requirements
}
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
