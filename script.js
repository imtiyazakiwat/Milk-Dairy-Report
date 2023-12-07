function submitForm() {
    // Get form values
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const litres = document.getElementById('litres').value;

    // Create a new entry object
    const newEntry = { date, time, litres };
    

    // Get existing milk history data from localStorage
    let milkHistoryData = JSON.parse(localStorage.getItem('milkHistoryData')) || [];

    // Add new entry to milk history data
    milkHistoryData.push(newEntry);

    // Save updated milk history data to localStorage
    localStorage.setItem('milkHistoryData', JSON.stringify(milkHistoryData));

    // Redirect to milk-history.html
    window.location.href = 'milk-history.html';
}
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
