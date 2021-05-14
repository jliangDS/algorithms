function binarySearch(string, letter) {
    var startpoint = 0
    console.log(startpoint);
    var endpoint = string.length-1;
    console.log(endpoint);
    var guessPosition = parseInt((endpoint-startpoint)/2)
    console.log(guessPosition);
    while (startpoint != endpoint) {

        console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)

            if (string[guessPosition] < letter) {
                console.log('too low')
                    startpoint = guessPosition 
                    guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
            } else if(string[guessPosition] > letter) {
                console.log('too high')
                    endpoint = guessPosition 
                    guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
            } else {
                console.log('just right')
                    return true;
            }
    }

    if(string === letter) {
        return true 
    } else {
        console.log('sorry')
        return false;
    }
}

let string = "abcd" 

binarySearch(string, 'z');