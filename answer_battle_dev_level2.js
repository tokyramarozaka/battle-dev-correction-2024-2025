const countMaxBobsleigh = (N, map) => {
    let count = 0;
    for(const line of map){
        let lineCount = 0;
        for(const letter of line){
            if (letter == "."){
                lineCount++;
            } else if(letter == "X"){
                lineCount = 0;
            }

            if (lineCount == 4){
                count++;
                lineCount = 0;
            }
        }
    }
    return count;
}