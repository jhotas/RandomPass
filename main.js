const characters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789",
  ..."!@#$%^&*()-_=+[]{};:,.<>/?\\|`~"
];

let passA = document.getElementById("passwordA")
let passB = document.getElementById("passwordB")

function generatePassword() {
    let passwordA = ""
    let passwordB = ""

    for (let i = 0; i <= 15; i++) {
        let indexA = Math.floor(Math.random() * characters.length)
        let indexB = Math.floor(Math.random() * characters.length)

        passwordA += characters[indexA]
        passwordB += characters[indexB]
    }

    passA.textContent = passwordA;
    passB.textContent = passwordB;
}

passA.addEventListener("click", () => {
    const savedPassword = passA.textContent

    navigator.clipboard.writeText(passA.textContent)
        .then(() => {
            passA.textContent = "Copied!"
            setTimeout(() => {
                passA.textContent = savedPassword
            }, 800)
        })
})

passB.addEventListener("click", () => {
    const savedPassword = passB.textContent

    navigator.clipboard.writeText(passB.textContent)
        .then(() => {
            passB.textContent = "Copied!"
            setTimeout(() => {
                passB.textContent = savedPassword
            }, 800)
        })
})