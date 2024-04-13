document.addEventListener("DOMContentLoaded", function() {
    const bagues = document.querySelectorAll('.container');
    let index = 0;

    setInterval(() => {
        bagues[index].style.opacity = 0;
        index = (index + 1) % bagues.length;
        bagues[index].style.opacity = 1;
    }, 2000); // Change la bague toutes les 2 secondes
});
