function convert(){
    let fromUnit = document.getElementById('fromUnit').value
    let toUnit = document.getElementById('toUnit').value

    //parses a value as a string and returns the first number
    let temperature = parseFloat(document.getElementById('temperature').value)

    let convertedValue;
    let resultUnit;

    //Perform conversion logic
    switch (fromUnit){
        case 'C':
            if(toUnit === 'F' ){
                convertedValue = (temperature * 9/5) +32;
                resultUnit = 'F'
            }else{
                convertedValue = temperature;
                resultUnit = 'C'
            }
            break
            case 'F':
                if(toUnit === 'C' ){
                    convertedValue = (temperature -32) *5/9;
                    resultUnit = 'C'
                }else{
                    convertedValue = temperature;
                    resultUnit = 'F'
                }
                break
    }

    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit
}