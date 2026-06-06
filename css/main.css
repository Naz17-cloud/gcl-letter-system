document.addEventListener(
"DOMContentLoaded",
() => {

```
    // ==========================
    // ROLE CHECK
    // ==========================

    const role =
        localStorage.getItem(
            "currentRole"
        );

    if(
        role !== "admin"
    ){

        window.location.href =
            "index.html";

        return;

    }

    loadDashboard();

}
```

);

// ==========================
// LOAD DASHBOARD
// ==========================

function loadDashboard(){

```
const letters =
    JSON.parse(
        localStorage.getItem(
            "letters"
        )
    ) || [];

loadStatistics(
    letters
);

loadRecentLetters(
    letters
);
```

}

// ==========================
// STATISTICS
// ==========================

function loadStatistics(
letters
){

```
const currentYear =
    new Date()
    .getFullYear();

const today =
    new Date()
    .toLocaleDateString(
        "id-ID"
    );

// TOTAL SURAT

document
.getElementById(
    "totalLetters"
)
.innerText =
letters.length;

// SURAT TAHUN INI

const yearLetters =
    letters.filter(
        letter =>

        letter.number.includes(
            currentYear
        )

    );

document
.getElementById(
    "yearLetters"
)
.innerText =
yearLetters.length;

// SURAT HARI INI

const todayLetters =
    letters.filter(
        letter =>

        letter.createdAt.includes(
            today
        )

    );

document
.getElementById(
    "todayLetters"
)
.innerText =
todayLetters.length;

// TOTAL USER UNIK

const users =
    [
        ...new Set(
            letters.map(
                letter =>
                letter.email
            )
        )
    ];

document
.getElementById(
    "totalUsers"
)
.innerText =
users.length;
```

}

// ==========================
// RECENT LETTERS
// ==========================

function loadRecentLetters(
letters
){

```
const tbody =
    document.getElementById(
        "recentLetters"
    );

if(
    !tbody
) return;

tbody.innerHTML = "";

const latestLetters =
    letters
    .slice()
    .reverse()
    .slice(
        0,
        10
    );

if(
    latestLetters.length === 0
){

    tbody.innerHTML =

    `
    <tr>

        <td
            colspan="5"
            style="
            text-align:center;
            padding:25px;">

            Belum ada surat

        </td>

    </tr>
    `;

    return;

}

latestLetters.forEach(
    letter => {

    tbody.innerHTML +=

    `
    <tr>

        <td>

            ${letter.number}

        </td>

        <td>

            ${letter.requester}

        </td>

        <td>

            ${letter.code}

        </td>

        <td>

            ${letter.createdAt}

        </td>

        <td>

            <span
                class="status-active">

                ${letter.status}

            </span>

        </td>

    </tr>
    `;

});
```

}
