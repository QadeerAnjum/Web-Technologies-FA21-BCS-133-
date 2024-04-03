
    document.addEventListener("DOMContentLoaded", function() {
        const image = document.querySelector('.img img');
        const menuItem = document.querySelector('.navbar-nav li:first-child a');

        image.addEventListener('mouseover', function() {
            menuItem.textContent = "SEATTLE TIMES IMAGE"; 
        });

        image.addEventListener('mouseout', function() {
            menuItem.textContent = "LOCAL"; 
        });
    });

