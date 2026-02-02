const display = document.getElementById('container')
const form = document.getElementById('form')
const baseURL = 'http://localhost:3000'

async function loadMessages() {
    const confessionInput = await fetch(`${baseURL}/confessions`)
    const outputs = await confessionInput.json()

    console.log(outputs)

    return outputs
}

async function printMessages() {
    const outputs = await loadMessages()

    outputs.forEach((output) => {
        const div = document.createElement('div')
        const displayName = document.createElement('p')
        const confessionMessage = document.createElement('p')

        displayName.textContent = output.display_name
        confessionMessage.textContent = output.messages

        div.append(displayName, confessionMessage)

        display.appendChild(div)
    })
}
printMessages()

async function confirmSubmit(e) {
    e.preventDefault()

    const formData = new FormData(form)
    const userMessage = Object.fromEntries(formData)
    const stringifyMessage = JSON.stringify(userMessage)

    const response = await fetch(`${baseURL}/confessions`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: stringifyMessage
    })
    window.location.reload()
}

form.addEventListener('submit', confirmSubmit)

