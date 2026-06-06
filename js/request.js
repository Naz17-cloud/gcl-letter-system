// ==========================================
// GCL LETTER SYSTEM
// REQUEST SCRIPT v1.0
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const code =
        document.getElementById("code");

    const form =
        document.getElementById("requestForm");

    const previewBox =
        document.getElementById("previewBox");

    // ==========================================
    // DEMO DATA
    // NANTI DIGANTI FIREBASE
    // ==========================================

    let currentNumber = 1;

    function getRomanMonth(month) {

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

        return roman[month - 1];

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
            String(currentNumber)
            .padStart(3, "0");

        previewBox.innerHTML =

            `GCL-SUB/${code.value}/${number}/${month}/${year}`;

    }

    updatePreview();

    code.addEventListener(
        "change",
        updatePreview
    );

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

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

            if (!subject) {

                alert(
                    "Perihal Surat wajib diisi."
                );

                return;

            }

            if (!destination) {

                alert(
                    "Tujuan Surat wajib diisi."
                );

                return;

            }

            alert(
                "Nomor Surat Berhasil Dibuat :\n\n" +
                previewBox.innerText
            );

            currentNumber++;

            updatePreview();

            form.reset();

        }
    );

});
