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

    loadHistory();

    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    if(searchBtn){

        searchBtn.addEventListener(
            "click",
            searchHistory
        );

    }

}
```

);

// ==========================
// LOAD HISTORY
// ==========================

function loadHistory(){

```
const letters =
    JSON.parse(
        localStorage.getItem(
            "letters"
        )
    ) || [];

renderTable(
    letters
);
```

}

// ==========================
// SEARCH
// ==========================

function searchHistory(){

```
const keyword =
    document
    .getElementById(
        "searchInput"
    )
    .value
    .toLowerCase()
    .trim();

const letters =
    JSON.parse(
        localStorage.getItem(
            "letters"
        )
    ) || [];

const filtered =
    letters.filter(
        letter =>

        letter.number
        .toLowerCase()
        .includes(
            keyword
        )

    );

renderTable(
    filtered
);
```

}

// ==========================
// RENDER TABLE
// ==========================

function renderTable(
data
){

```
const tbody =
    document.getElementById(
        "historyTable"
    );

if(
    !tbody
) return;

tbody.innerHTML = "";

if(
    data.length === 0
){

    tbody.innerHTML =

    `
    <tr>

        <td colspan="8"
            style="
            text-align:center;
            padding:30px;">

            Belum ada data surat

        </td>

    </tr>
    `;

    return;

}

data
.sort(
    (a,b)=>

    new Date(
        b.createdAt
    ) -

    new Date(
        a.createdAt
    )

)
.forEach(
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
            ${letter.email}
        </td>

        <td>
            ${letter.code}
        </td>

        <td>
            ${letter.subject}
        </td>

        <td>
            ${letter.destination}
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
