// ======================================
// GCL LETTER SYSTEM
// GLOBAL APP SCRIPT v1.0
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeSidebar();

        initializeLogout();

        initializeToast();

        initializePageTitle();

    }
);

// ======================================
// SIDEBAR ACTIVE MENU
// ======================================

function initializeSidebar() {

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    const links =
        document.querySelectorAll(
            ".sidebar a"
        );

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add(
                "active"
            );

        }

    });

}

// ======================================
// LOGOUT
// ======================================

function initializeLogout() {

    const logoutButtons =
        document.querySelectorAll(
            ".logout-btn"
        );

    logoutButtons.forEach(btn => {

        btn.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const confirmLogout =
                    confirm(
                        "Apakah Anda yakin ingin logout?"
                    );

                if (
                    confirmLogout
                ) {

                    localStorage.clear();

                    window.location.href =
                        "index.html";

                }

            }
        );

    });

}

// ======================================
// TOAST NOTIFICATION
// ======================================

function initializeToast() {

    if (
        document.getElementById(
            "toast"
        )
    ) return;

    const toast =
        document.createElement(
            "div"
        );

    toast.id = "toast";

    toast.innerHTML = "";

    document.body.appendChild(
        toast
    );

}

// ======================================
// SHOW TOAST
// ======================================

function showToast(
    message,
    type = "success"
) {

    const toast =
        document.getElementById(
            "toast"
        );

    toast.innerHTML =
        message;

    toast.className =
        `toast toast-${type}`;

    toast.style.display =
        "block";

    setTimeout(() => {

        toast.style.display =
            "none";

    }, 3000);

}

// ======================================
// PAGE TITLE
// ======================================

function initializePageTitle() {

    const pageTitle =
        document.querySelector(
            ".page-title"
        );

    if (!pageTitle) return;

    document.title =
        pageTitle.innerText +
        " | GCL Letter System";

}

// ======================================
// GLOBAL HELPER
// ======================================

function formatDate(
    dateString
) {

    const date =
        new Date(dateString);

    return date
        .toLocaleDateString(
            "id-ID"
        );

}

// ======================================
// EXPORT GLOBAL
// ======================================

window.showToast =
    showToast;

window.formatDate =
    formatDate;
