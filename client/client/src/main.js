const display = document.getElementById('container')
const form = document.getElementById('form')

async function loadMessages() {
    const confessionInput = await fetch('/confessions')
    const outputs = await response.json()

    console.log(outputs)

    return outputs
}

async function printMessages() {
    const outputs = await loadMessages()

    outputs.forEach((output) => {
        const container = document.createElement('container')
        const displayName = document.createElement('p')
        const confessionMessage = document.createElement('p')

        displayName.textContent = output.display_name
        confessionMessage.textContent = output.message

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

    const response = await fetch('/messages', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: stringifyMessage
    })
    window.location.reload()
}

form.addEventListener('submit', confirmSubmit)

