function calculateDaysNeeded(){
    
    // get the value from the input field

    const pageInputElement = document.getElementById('first_name2')
    const pageInputValue = pageInputElement.value
    //  const pageInputValue = document.getElementById('first_name2').value //
    console.log(pageInputValue)

    // use formula to find page needed
    let total = 604
    let result = total / pageInputValue
    const niceResult = result.toFixed(0)
    console.log('result', result)

    // get the element of the card
    const resultArea = document.getElementById('result')
    
    let message = 'Please input a valid number of pages'

    if (pageInputValue && pageInputValue > 0 && pageInputValue < 605) {
        message = 'If you read  ' + pageInputValue + ' page(s) a day, you will khatam it in about ' + niceResult + '  day(s).'
    }
    // output the result on the card
    resultArea.innerHTML = message
}

function calculatePagesNeeded(){
    
    // get the value from the input field

    const dayInputElement = document.getElementById('first_name3')
    const dayInputValue = dayInputElement.value
    //  const dayInputValue = document.getElementById('first_name3').value //
    console.log(dayInputValue)

    // use formula to find day needed
    let total = 604
    let result = total / dayInputValue
    const niceResult = result.toFixed(2)
    console.log('result', result)

    // get the element of the card
    const resultArea = document.getElementById('result1')
    let message = 'Please input a valid number of day'

    if (dayInputValue && dayInputValue > 0) {
        message = 'If you read  for ' + dayInputValue + ' day(s), you will complete reading about ' + niceResult + '  pages(s).'
    }
    // output the result on the card
    resultArea.innerHTML = message
}



