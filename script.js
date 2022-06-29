const textField = document.getElementById('text')
let minutes = document.getElementById('minutes-count')
let seconds = document.getElementById('seconds-count')

const getTime = () =>  {
    let string = ''
    let countDown = 0
    textField.value = ''

    // get the current value of the text
    textField.addEventListener('keyup', (event) => {
        event.preventDefault()

        if (textField.value.length < 4) {
            console.log('smaller')
            string += textField.value.charAt(textField.value.length - 1)
            textField.value = string
            console.log(string)

            if (string.length < 2) {
                minutes.innerText = ''
                minutes.innerText += string.substring(0,2)
            }
            else if (string.length === 2) {
                string += ':'
            }
            if (string.length > 2) {
                seconds.innerText = string.substring(3,5)
            }

        } else {
            console.log('more')
            console.log('string')
            textField.readOnly = true
            // textField.disabled = true
        }
    })

    
}

getTime()
