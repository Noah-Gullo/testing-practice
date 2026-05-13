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