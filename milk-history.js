// Add this to your existing script.js or create a new one

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}

// Sample data for demonstration
const milkHistoryData = [
    { date: '2023-01-01', time: 'Morning', litres: 5 },
    { date: '2023-01-02', time: 'Evening', litres: 7 },
    { date: '2023-01-03', time: 'Morning', litres: 6 },
    // Add more data as needed
];

function populateMilkHistoryTable() {
    const milkTable = document.getElementById('milkTable');
    const tbody = milkTable.getElementsByTagName('tbody')[0];

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate table with data
    milkHistoryData.forEach(entry => {
        const row = tbody.insertRow();
        const dateCell = row.insertCell(0);
        const timeCell = row.insertCell(1);
        const litresCell = row.insertCell(2);

        dateCell.textContent = entry.date;
        timeCell.textContent = entry.time;
        litresCell.textContent = entry.litres;
    });
}


// Populate the milk history table when the page loads
document.addEventListener('DOMContentLoaded', populateMilkHistoryTable);

