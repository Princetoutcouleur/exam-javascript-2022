
// Ajout d'un nouveau éléve à la liste
button.onclick = () => {
            const user = {
                nom: nom.value,
                annee: annee.value,
                prenom: prenom.value,
                note: note.value

            }
            let local = JSON.parse(localStorage.getItem("user")) || [];
            local.push(user);

            localStorage.setItem("user", JSON.stringify(local))
            document.location.reload();

        }
        var tableau = JSON.parse(localStorage.getItem("user")) || []
        console.log(tableau.nom);
        console.log(tableau.length);

        const mama = document.getElementById('tbody');
        const afficherListe = (table, tbody) => {
            var baba = table.map((inscrit, index) =>
                `<tr>
                        <td>${index + 1}</td>
                        <td>${inscrit.prenom}</td>
                        <td>${inscrit.nom}</td>
                        <td>${inscrit.annee}</td>
                        <td>${inscrit.note}</td>
                        <td><INPUT TYPE="reset" VALUE=" Supprimer" id="effacer" onclick="effacer()"> <INPUT TYPE="reset" VALUE=" Modifier "></td>
                    </tr>`
            )
            baba.forEach(element => {
                tbody.innerHTML += element;
            });
        }
        afficherListe(tableau, mama);

        
        alert("Èléve ajouté avec succes !")

// Supprimer un éléve de la liste

function effacer() {
    tbody.parentNode.removeChild(effacer);
}
