
/*Passando o resultado das funções do email*/ 
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

/*Passando o resultado das funções da senha*/ 
function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

//----------------------------------------------------------------------------------

//Validação para acessar a página seguinte
function acessar() {
    const email = form.email().value;
    const senha = form.senha().value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(response => {
            window.location.href = "pages/index.html"
        })
        .catch(error => {
            alert("Usuário ou senha incorretos, tente novamente.");
        });
}

//----------------------------------------------------------------------------------

//Informar ao usuário caso a senha ou email estejam incorretos
function getErrorMessage(error){
    if(error.code == "auth/invalid-login-credentials"){
        return "Usuário ou senha incorretos, tente novamente.";
    }
    return error.message;
}

//*Verificando se o email é válido
function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

//----------------------------------------------------------------------------------

//*Mostrar ou esconder erro email
function toggleEmailErrors(){
    const email = form.email().value;
    form.emailObrigatorio().style.display = email ? "none" : "block";
    form.emailInvalido().style.display = validateEmail(email) ? "none" : "block";
}

//Mostrar ou esconder erro senha
function togglePasswordErrors(){
    const senha = form.senha().value;
    form.senhaObrigatoria().style.display = senha ? "none" : "block";
}

//Habilitar ou desabilitar o botão
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    const senha = isPasswordValid();
    form.login().disabled = !emailValid || !senha;
}

//Verificando se a senha é válida
function isPasswordValid(){
    const senha = form.senha().value;
    if(!senha){
        return false;
    }
    return true;
}

//Verificando a estrutura do email 
function validateEmail(email){
    return /\S+@\S+\.\S/.test(email);
}

//----------------------------------------------------------------------------------

//Criando variáveis para chamar nas funções
const form = {
    email: () => document.getElementById("email"),
    senha: () => document.getElementById("senha"),
    emailObrigatorio: () => document.getElementById("email-obrigatorio"),
    emailInvalido: () => document.getElementById("email-invalido"),
    senhaObrigatoria: () => document.getElementById("senha-obrigatoria"),
    login: () => document.getElementById("login")
}