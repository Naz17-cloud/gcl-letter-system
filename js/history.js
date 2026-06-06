document.addEventListener(
"DOMContentLoaded",
loadHistory
);

function loadHistory(){

const data =
JSON.parse(
localStorage.getItem(
"letters"
)
) || [];

const tbody =
document.getElementById(
"historyTable"
);

tbody.innerHTML = "";

data.forEach(letter => {

tbody.innerHTML += `

<tr>

<td>${letter.number}</td>

<td>${letter.requester}</td>

<td>${letter.email}</td>

<td>
${letter.number.split('/')[1]}
</td>

<td>
${letter.subject}
</td>

<td>
${letter.createdAt}
</td>

<td>

<span class="status-active">

${letter.status}

</span>

</td>

</tr>

`;

});

}
