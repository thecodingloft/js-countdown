const textField = document.getElementById('text')
let minutes = document.getElementById('minutes-count')
let seconds = document.getElementById('seconds-count')

const getTime = () =>  {
    let string = ''
    let position = 0
    textField.value = ''

    // get the current value of the text
    textField.addEventListener('keyup', (event) => {
        event.preventDefault()

        // if (textField.value.length <= 100 && !isNaN(textField.value)) {
        if (textField.value.length <= 5 && (!isNaN(textField.value) || textField.value.includes(':'))) {
            string += textField.value.charAt(textField.value.length - 1)
            textField.value = string

            // add the first two numbers to the minutes field
            if (string.length <= 2) {
                console.log("smaller than 3")

                // check if the minutes are default
                if (minutes.innerText === '00') {
                    minutes.innerText = ''
                }

                // add the last number character to the minutes
                minutes.innerText += string.substring(position)
                console.log("minutes", minutes.innerText)
                position += 1

                console.log('input: ', textField.value)
                console.log('string: ', string)
                console.log('string length: ', string.length)

                // add the colon after the minutes have 2 numbers
                if (minutes.innerText.length === 2) {
                    string += ':'
                    position += 1

                }
            }

            // add the last two numbers to the seconds field
            if (string.length >= 4) {
                
                // remove the default values from the seconds
                if (seconds.innerText === '00') {
                    seconds.innerText = ''
                }

                // add the latest number values to the seconds field
                seconds.innerText += string.substring(position)
                position += 1

                console.log('input: ', textField.value)
                console.log('string: ', string)
                console.log('string length: ', string.length)
            }

        } 
        else if (string.length > 4) {
            console.log('over now')
            console.log('input: ', textField.value)
            console.log('string: ', string)
            console.log('string length: ', string.length)
            textField.readOnly = true
        }
    })

    
}

getTime()
