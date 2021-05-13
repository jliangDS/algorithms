function binarySearch(string, letter) {
    var startpoint = 0
    var endpoint = string.length-1;
    var guessPosition = parseInt((endpoint-startpoint)/2)
    while (startpoint != endpoint) {
        console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
            if (string[guessPosition] < letter) {
                console.log('too low')
                    startpoint = guessPosition 
                    guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
            }
    }
}