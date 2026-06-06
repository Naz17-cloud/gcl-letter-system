// ======================================
// GCL LETTER SYSTEM
// DASHBOARD SCRIPT v1.0
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadGreeting();

        loadDashboardStats();

        loadRecentLetters();

    }
);

// ======================================
// GREETING
// ======================================

function loadGreeting() {

    const hour =
        new Date().getHours();

    let greeting =
        "Selamat Datang";

    if (hour >= 4 && hour < 11) {

        greeting =
            "Selamat Pagi";

    }

    else if (
        hour >= 11 &&
        hour < 15
    ) {

        greeting =
            "Selamat Siang";

    }

    else if (
        hour >= 15 &&
        hour < 18
    ) {

        greeting =
            "Selamat Sore";

    }

    else {

        greeting =
            "Selamat Malam";

    }

    const greetingBox =
        document.getElementById(
            "greetingText"
        );

    if (greetingBox) {

        greetingBox.innerText =
            greeting;

    }

}

// ======================================
// DASHBOARD STATS
// ======================================

function loadDashboardStats() {

    const stats = {

        totalSurat: 845,

        bulanIni: 215,

        hariIni: 12,

        status:
            "Online"

    };

    setText(
        "totalSurat",
        stats.totalSurat
    );

    setText(
        "suratBulanIni",
        stats.bulanIni
    );

    setText(
        "suratHariIni",
        stats.hariIni
    );

    setText(
        "systemStatus",
        stats.status
    );

}

// ======================================
// RECENT LETTERS
// ======================================

function loadRecentLetters() {

   const data =
JSON.parse(
localStorage.getItem("letters")
) || [];

        {
            number:
                "GCL-SUB/SPDO/127/VI/2026",
            code:
                "SPDO",
            subject:
                "Permohonan Delivery Order",
            status:
                "ACTIVE"
        },

        {
            number:
                "GCL-SUB/SPC/128/VI/2026",
            code:
                "SPC",
            subject:
                "Peminjaman Container",
            status:
                "ACTIVE"
        },

        {
            number:
                "GCL-SUB/SK/129/VI/2026",
            code:
                "SK",
            subject:
                "Surat Kuasa Operasional",
            status:
                "ACTIVE"
        }

    ];

    const table =
        document.getElementById(
            "recentLetters"
        );

    if (!table) return;

    table.innerHTML = "";

    data.forEach(item => {

        table.innerHTML +=

        `
        <tr>

            <td>
                ${item.number}
            </td>

            <td>
                ${item.code}
            </td>

            <td>
                ${item.subject}
            </td>

            <td>

                <span
                class="status-active">

                ${item.status}

                </span>

            </td>

        </tr>
        `;

    });

}

// ======================================
// HELPER
// ======================================

function setText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );

    if (element) {

        element.innerText =
            value;

    }
document
.getElementById(
"totalSurat"
)
.innerText =
data.length;
}
