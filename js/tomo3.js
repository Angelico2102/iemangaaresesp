document.addEventListener("DOMContentLoaded", function () {
    const mangaPagesContainer = document.getElementById("manga-pages");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const pageSelector = document.getElementById("pageSelector");

    const totalPages = 158; // Cambia esto según tus necesidades
    let currentPage = 1;

    function loadPage(page) {
        mangaPagesContainer.innerHTML = `<img id="manga-page" src="../images/tomo3/${page}.png">`;
    }

    function updatePageSelector() {
        pageSelector.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.text = `Página ${i}`;
            pageSelector.appendChild(option);
        }
        pageSelector.value = currentPage;
    }

    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage);
            updatePageSelector();
        }
    });

    nextPageButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            loadPage(currentPage);
            updatePageSelector();
        }
    });

    pageSelector.addEventListener("change", function () {
        currentPage = parseInt(pageSelector.value);
        loadPage(currentPage);
    });

    // Inicializar la página
    loadPage(currentPage);
    updatePageSelector();
});
