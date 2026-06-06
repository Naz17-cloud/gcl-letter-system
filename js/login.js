document.addEventListener(
"DOMContentLoaded",
() => {

```
    const loginForm =
        document.getElementById(
            "loginForm"
        );

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const email =
                document
                .getElementById(
                    "email"
                )
                .value
                .trim()
                .toLowerCase();

            const password =
                document
                .getElementById(
                    "password"
                )
                .value
                .trim();

            if(
                !email ||
                !password
            ){

                alert(
                    "Email dan Password wajib diisi."
                );

                return;
            }

            // ==================================
            // LOGIN DUMMY
            // NANTI DIGANTI FIREBASE
            // ==================================

            let role =
                "staff";

            if(
                email.includes(
                    "admin"
                )
            ){

                role =
                "admin";

            }

            localStorage.setItem(
                "currentUser",
                email
            );

            localStorage.setItem(
                "currentRole",
                role
            );

            if(
                role === "admin"
            ){

                window.location.href =
                    "admin.html";

            }else{

                window.location.href =
                    "request.html";

            }

        }
    );

}
```

);
