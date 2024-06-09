document.addEventListener('DOMContentLoaded', function() {
    var submenuItems = document.querySelectorAll('.accordion-menu .submenu > a');

    submenuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
});
