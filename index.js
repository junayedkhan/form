const submit = document.getElementById("submit-btn")
const err = document.getElementById("err-message")
submit.addEventListener('click', submithandler)
function submithandler(event){
    event.preventDefault()

var name = document.getElementById('name').value
var email = document.getElementById('email').value
var phone = document.getElementById('phone').value
var password = document.getElementById('password').value


if(name == ""){
    err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Name is Empty !
    </div> `
} else if(email == ""){
        err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Email is Empty !
    </div> `
} else if(!email.includes("@")){
            err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Email is invalid !
    </div> `
} else if(phone == ""){
            err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Phone is Empty !
    </div> `
} else if(phone.length > 11){
            err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Phone is invalid !
    </div> `
} else if(phone.length < 11){
            err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Phone is invalid !
    </div> `
} else if(password == ""){
            err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Password is Empty !
    </div> `
} else if(password.length < 6){
            err.innerHTML = `
    <div class="alert alert-danger">
        <strong>Error :</strong> Password is invalid !
    </div> `
} else {
            err.innerHTML = `
    <div class="alert alert-success">
        <strong>Success :</strong> Successfully Done !
    </div> `
}

}
