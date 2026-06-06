// =======================================
// GCL LETTER SYSTEM
// LOGIN SCRIPT v1.0
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const loginForm =
        document.getElementById("loginForm");

    loginForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const email =
                document
                .getElementById("email")
                .value
                .trim();

            const password =
                document
                .getElementById("password")
                .value
                .trim();

            if (!email || !password) {

                alert(
                    "Email dan Password wajib diisi."
                );

                return;
            }

            /*
            ======================================
            FIREBASE LOGIN
            AKAN DITAMBAHKAN NANTI
            ======================================
            */

            if (
                email.includes("admin")
            ) {

                window.location.href =
                    "admin.html";

            } else {

                window.location.href =
                    "dashboard.html";

            }

        }
    );

});
