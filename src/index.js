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