document.addEventListener("DOMContentLoaded", () => {

```
const code = document.getElementById("code");
const form = document.getElementById("requestForm");
const previewBox = document.getElementById("previewBox");

function getRomanMonth(month) {

    const roman = [
        "I","II","III","IV","V","VI",
        "VII","VIII","IX","X","XI","XII"
    ];

    return roman[month - 1];
}

function getNextNumber() {

    const letters =
        JSON.parse(
            localStorage.getItem("letters")
        ) || [];

    return letters.length + 1;
}

function updatePreview() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        getRomanMonth(
            now.getMonth() + 1
        );

    const number =
        String(
            getNextNumber()
        ).padStart(3,"0");

    previewBox.innerText =
        `GCL-SUB/${code.value}/${number}/${month}/${year}`;

}

updatePreview();

code.addEventListener(
    "change",
    updatePreview
);

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const requesterName =
            document
            .getElementById("requesterName")
            .value
            .trim();

        const requesterEmail =
            document
            .getElementById("requesterEmail")
            .value
            .trim();

        const subject =
            document
            .getElementById("subject")
            .value
            .trim();

        const destination =
            document
            .getElementById("destination")
            .value
            .trim();

        const description =
            document
            .getElementById("description")
            .value
            .trim();

        if(!requesterName){

            alert(
                "Nama Peminta wajib diisi."
            );

            return;
        }

        if(!requesterEmail){

            alert(
                "Email Peminta wajib diisi."
            );

            return;
        }

        if(!subject){

            alert(
                "Perihal Surat wajib diisi."
            );

            return;
        }

        if(!destination){

            alert(
                "Tujuan Surat wajib diisi."
            );

            return;
        }

        const letters =
            JSON.parse(
                localStorage.getItem("letters")
            ) || [];

        const letterData = {

            number:
                previewBox.innerText,

            code:
                code.value,

            requester:
                requesterName,

            email:
                requesterEmail,

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
            letterData
        );

        localStorage.setItem(
            "letters",
            JSON.stringify(
                letters
            )
        );

        alert(
            "Nomor Surat Berhasil Dibuat\n\n" +
            letterData.number
        );

        form.reset();

        updatePreview();

    }
);
```

});
