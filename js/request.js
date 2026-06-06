document.addEventListener(
"DOMContentLoaded",
() => {

```
    const form =
        document.getElementById(
            "requestForm"
        );

    const code =
        document.getElementById(
            "code"
        );

    const previewBox =
        document.getElementById(
            "previewBox"
        );

    const currentUserBox =
        document.getElementById(
            "currentUserBox"
        );

    // ============================
    // LOGIN CHECK
    // ============================

    const currentUser =
        localStorage.getItem(
            "currentUser"
        );

    const currentRole =
        localStorage.getItem(
            "currentRole"
        );

    if(
        !currentUser
    ){

        window.location.href =
        "index.html";

        return;

    }

    if(
        currentRole === "admin"
    ){

        window.location.href =
        "admin.html";

        return;

    }

    currentUserBox.innerText =
        currentUser;

    // ============================
    // ROMAN MONTH
    // ============================

    function getRomanMonth(
        month
    ){

        const roman = [

            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "VIII",
            "IX",
            "X",
            "XI",
            "XII"

        ];

        return roman[
            month - 1
        ];

    }

    // ============================
    // NEXT NUMBER
    // ============================

    function getNextNumber(){

        const year =
            new Date()
            .getFullYear();

        const key =
            `lastNumber_${year}`;

        const lastNumber =
            Number(
                localStorage.getItem(
                    key
                )
            ) || 0;

        return lastNumber + 1;

    }

    // ============================
    // PREVIEW
    // ============================

    function updatePreview(){

        const now =
            new Date();

        const year =
            now.getFullYear();

        const month =
            getRomanMonth(
                now.getMonth() + 1
            );

        const nextNumber =
            getNextNumber();

        const formatted =
            String(
                nextNumber
            ).padStart(
                3,
                "0"
            );

        previewBox.innerText =

            `GCL-SUB/${code.value}/${formatted}/${month}/${year}`;

    }

    updatePreview();

    code.addEventListener(
        "change",
        updatePreview
    );

    // ============================
    // GENERATE
    // ============================

    form.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const requesterName =
                document
                .getElementById(
                    "requesterName"
                )
                .value
                .trim();

            const subject =
                document
                .getElementById(
                    "subject"
                )
                .value
                .trim();

            const destination =
                document
                .getElementById(
                    "destination"
                )
                .value
                .trim();

            const description =
                document
                .getElementById(
                    "description"
                )
                .value
                .trim();

            if(
                !requesterName
            ){

                alert(
                    "Nama Peminta wajib diisi."
                );

                return;

            }

            if(
                !subject
            ){

                alert(
                    "Perihal Surat wajib diisi."
                );

                return;

            }

            if(
                !destination
            ){

                alert(
                    "Tujuan Surat wajib diisi."
                );

                return;

            }

            const letters =
                JSON.parse(
                    localStorage.getItem(
                        "letters"
                    )
                ) || [];

            const number =
                previewBox.innerText;

            const newLetter = {

                number:
                    number,

                code:
                    code.value,

                requester:
                    requesterName,

                email:
                    currentUser,

                subject:
                    subject,

                destination:
                    destination,

                description:
                    description,

                status:
                    "ACTIVE",

                createdAt:
                    new Date()
                    .toLocaleString(
                        "id-ID"
                    )

            };

            letters.push(
                newLetter
            );

            localStorage.setItem(
                "letters",
                JSON.stringify(
                    letters
                )
            );

            const year =
                new Date()
                .getFullYear();

            const key =
                `lastNumber_${year}`;

            const currentNumber =
                getNextNumber();

            localStorage.setItem(
                key,
                currentNumber
            );

            if(
                typeof showToast
                === "function"
            ){

                showToast(
                    "Nomor Surat Berhasil Dibuat"
                );

            }else{

                alert(
                    "Nomor Surat Berhasil Dibuat"
                );

            }

            form.reset();

            updatePreview();

        }
    );

}
```

);
