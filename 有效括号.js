/**
 * @param {string} s
 * @return {boolean}
 */
 let isValid = function(s) {
    if(!s.length){
        return false;
    }
    let obj = {
        '[':']',
        '(':')',
        '{':'}',
    }
    let arr = ['[','(','{'];
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(arr.indexOf(s[i]) !== -1 ){
            stack.push(s[i]);
        } else if(obj[stack[stack.length]] === s[i]){
            stack.pop();
        } 
    }
    if(stack.length){
        console.log(stack);
        return false;
    }
    return true;
};
console.log(isValid('()'));