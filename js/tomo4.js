document.addEventListener("DOMContentLoaded", function () {
    const mangaPagesContainer = document.getElementById("manga-pages");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const pageSelector = document.getElementById("pageSelector");

    const totalPages = 202; // Ajusta según tus necesidades
    let currentPage = 1;

    function loadPage(page) {
        mangaPagesContainer.innerHTML = `<img id="manga-page" src="../images/tomo4/${page}.png" onclick="nextPage()">`;
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

    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage);
            updatePageSelector();
        }
    }

    function goToNextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            loadPage(currentPage);
            updatePageSelector();
        }
    }

    function handleImageClick() {
        if (currentPage < totalPages) {
            goToNextPage();
        }
        // Puedes agregar aquí otras acciones si es necesario
    }

    prevPageButton.addEventListener("click", goToPrevPage);
    nextPageButton.addEventListener("click", goToNextPage);

    pageSelector.addEventListener("change", function () {
        currentPage = parseInt(pageSelector.value);
        loadPage(currentPage);
    });

    mangaPagesContainer.addEventListener("click", handleImageClick);

    loadPage(currentPage);
    updatePageSelector();
});

function nextPage() {
    const nextIndex = Math.min(parseInt(pageSelector.value) + 1, totalPages);
    pageSelector.selectedIndex = nextIndex - 1;
    pageSelector.dispatchEvent(new Event('change'));
}
