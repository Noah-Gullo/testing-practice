export function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str){
    return str.split("").reverse().join("");
}

export const calculator = {
    add: function(a, b){
        return a + b;
    },

    subtract: function(a, b){
        return a - b;
    },

    multiply: function(a, b){
        return a * b;
    },

    divide: function(a, b){
        return a / b;
    }
}

export function caesarCipher(str, factor){
    let result = "";

    for(let i = 0; i < str.length; i++){
        const currCode = str.charCodeAt(i);
        const offset = factor % 26;
        let newCode = currCode + offset;

        if((currCode >= 65 && currCode <= 90)){
            if(currCode + factor > 90){
                newCode = 64 + offset;
            }
            result += String.fromCharCode(newCode);
        }else if (currCode >= 97 && currCode <= 122){
            if(currCode + factor > 122){
                newCode = 96 + offset;
            }
            result += String.fromCharCode(newCode);
        }else{  
            result += str[i]
        }
    }

    return result;
}

export function analyzeArray(arr){
    const result = {
        average: function(){
            let sum = 0;
            for(let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            return sum / arr.length;
        },
        min: function(){
            let currMin = Infinity;
            for(let i = 0; i < arr.length; i++){
                if(arr[i] < currMin){
                    currMin = arr[i];
                }
            }
            return currMin;
        },
        max: function(){
            let currMax = -Infinity;
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > currMax){
                    currMax = arr[i];
                }
            }
            return currMax;
        },
        length: function(){
            return arr.length;
        }
    }

    return result;
}