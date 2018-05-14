const getUsers = () => {
    $.ajax({
        url: '/api/users',
        context: document.body,
        success: (res) => {
            // riempio la tabella di robe
            let tableBody = document.getElementById("table");
            let users = res.users;

            users.forEach((u) => {
                // la riga
                let row = document.createElement("tr");

                // colonna nome
                let td1 = document.createElement("td");
                td1.appendChild(document.createTextNode(u.nome));
                row.appendChild(td1);

                // colonna email
                let td2 = document.createElement("td");
                td2.appendChild(document.createTextNode(u.email));
                row.appendChild(td2);

                // colonna song
                let td3 = document.createElement("td");
                td3.appendChild(document.createTextNode(u.song));
                row.appendChild(td3);

                tableBody.appendChild(row);
            })

        }
    })
};

/**
 * Quando il documento di carica lancia la chiamata API
 */
$(document).ready(() => {
    getUsers();
});