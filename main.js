const url = "http://localhost:8080/contatos"; 

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const msgInput = document.getElementById('message');

function addMsg(event) {
    event.preventDefault();
    console.log('addMSG');
    
    const newMsg = {
        nome: nameInput.value,
        email: emailInput.value,
        telefone: phoneInput.value,
        msg: msgInput.value
    };

    axios.post("http://localhost:8080/contatos", newMsg)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error("Erro ao enviar mensagem:", error);
        });
}

form.addEventListener('submit', addMsg);
