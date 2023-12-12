
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "../login.html"
    }).catch(()=> {
        alert("Erro ao fazer logout")
    })
}

//------------------------------------------------------------------------------
/*Mostrar e ocultar a barra*/
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

/* Mostrar e ocultar texto */
let mensagem = document.querySelector(".mensagem") ;

//Mostrar a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
//Esconder a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}

//------------------------------------------------------------------------------
//Verificando as permissões do usuário
function verificarPermissoes(user) {
    const usuarioRef = firebase.firestore().collection('Usuarios').doc(user.uid);

    usuarioRef.get()
        .then(doc => {
            if (doc.exists) {
                const usuarioData = doc.data();
                const idsDashboards = Object.keys(usuarioData)
                    .filter(key => key.startsWith('id'))
                    .map(key => usuarioData[key]);

                criarBotoesMenu(idsDashboards);
            } else {
                alert('Usuário sem autorização para acessar os dashboards');
            }
        })
        .catch(error => {
            console.error('Erro ao verificar permissões:', error);
            alert('Erro ao verificar permissões. Tente novamente mais tarde.');
        });
}
//------------------------------------------------------------------------------

    /*const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const dataFormatada = today.toLocaleDateString(); //Formatando a data*/

//------------------------------------------------------------------------------

//Criando botões dinamicamente
function criarBotoesMenu(ids) {
    const menu = document.querySelector(".menu");

    //Ordenar os IDs alfanumericamente
    const sortedIds = ids.sort();

    //Iterar sobre os IDs de dashboards do usuário
    sortedIds.forEach(id => {
        // Obter os dados do dashboard correspondente na coleção "Dashboards"
        firebase.firestore().collection("Dashboards").doc(id).get()
            .then(doc => {
                if (doc.exists) {
                    const dashboard = doc.data();
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = "#";
                    a.textContent = dashboard.nome;
                    li.className = "glow-on-hover";

                    a.addEventListener("click", function () {
                        exibirDashboard(dashboard.link);
                    });

                    li.appendChild(a);
                    menu.appendChild(li);
                } else {
                    console.error(`Dashboard com ID ${id} não encontrado.`);
                }
            })
            .catch(error => {
                console.error('Erro ao obter dados do dashboard:', error);
            });
    });
}


//Exibindo o dashboard
function exibirDashboard(id) {
    const div = document.querySelector("#content");
    div.innerHTML = `${id}`;
}