
/*Mostrar e ocultar a barra*/
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

//------------------------------------------------------------------------------

function changeContent(reportId) {
    let div = document.querySelector("#content");
    div.innerHTML = `<iframe title="Power BI Report" width="1400" height="700" src="https://app.powerbi.com/reportEmbed?reportId=${reportId}&navContentPaneEnabled=false&autoAuth=true&ctid=f5c1c89d-9a3a-480b-b011-2d2c3d6ce25d" frameborder="0" allowFullScreen="true"></iframe>`;
}

let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");
let link3 = document.querySelector("#link3");

link1.addEventListener("click", function () {
    changeContent("fce4842b-24f1-4429-8f6e-506eaab2243d");
});

link2.addEventListener("click", function () {
    changeContent("b3471f8c-8adb-4a05-b207-85b4af37ed5e");
});

link3.addEventListener("click", function () {
    changeContent("6b92f6f8-3f6f-49c8-94d9-6fe92e2e4946");
});

//------------------------------------------------------------------------------

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