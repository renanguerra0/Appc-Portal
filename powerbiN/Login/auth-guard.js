
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../login.html";
    } else {
        verificarPermissoes(user);
    }
})