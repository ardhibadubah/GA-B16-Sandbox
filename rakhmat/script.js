// Selector
const counter = document.querySelector("#counter")
const description = document.querySelector("#description")
const alertContainer = document.querySelector("#alertContainer")

const btn = document.querySelector("#btn-1")

const emoji = '🎮'
let alertArray = []

function addNumber(){
  let nilaiSebelumnya = Number(counter.textContent) 
  nilaiSebelumnya += 1
  counter.textContent = nilaiSebelumnya
}

function addAlertError(){
  const alertError = {
    type: "error"
  }
  alertArray.push(alertError)
  showAlert()
}

function addAlertSuccess(){
  const alertError = {
    type: "success"
  }
  alertArray.push(alertError)
  showAlert()
}

function showAlert(){
  // Reset
  alertContainer.innerHTML = ""

  // For loop dulu
  for(let i=0; i < alertArray.length; i++){
    // BIKIN NODE ELEMENT
    let divEl = document.createElement("div")
    if( alertArray[i].type === "error"){
      divEl.classList = "alert alert-danger"
      divEl.textContent = "ADA ERROR!!"
    } else if( alertArray[i].type === "success" ){
      divEl.classList = "alert alert-success"
      divEl.textContent = "ANDA SUKSES!!"
    }
    // APPEND
    alertContainer.appendChild(divEl)
  }
}

function handleCopy(){
  description.textContent = "EAAA MAU COPY YA"
}