const formCadastro = document.querySelector(".formCadastro");
const IName         = document.querySelector(".name");
const IEmail        = document.querySelector(".email");
const IPhone        = document.querySelector(".phone");
const IPassword     = document.querySelector(".password");

function postDataToBE() {
    fetch('http://localhost:8080/users',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: IName.value,
                email: IEmail.value,
                phone: IPhone.value,
                password: IPassword.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

function clearFields(){
    IName.value = "";
    IEmail.value = "";
    IPhone.value = "";
    IPassword.value = "";
}

formCadastro.addEventListener('submit', function (event) {
    event.preventDefault;
    postDataToBE();
    clearFields();
})

// console.log(formCadastro);