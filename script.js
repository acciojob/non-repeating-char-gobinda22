let s = prompt("Enter a string")
var arr = [];
for(let i=0;i<s.length;i++){
    let ch = s[i];
    let idx = ch.charCodeAt(0)
    if(arr[idx - 'a'.charCodeAt(0)] >= 1){
        let temp = arr[idx - 'a'.charCodeAt(0)];
        arr[idx - 'a'.charCodeAt(0)] = temp + 1;
    }
    else{
        arr[idx - 'a'.charCodeAt(0)] =  1;
    }

}
for(let i=0;i<s.length;i++){
     let ch = s[i];
     let idx = ch.charCodeAt(0)
     if(arr[idx - 'a'.charCodeAt(0)] == 1){
         alert(ch);
         break;
     }
}
