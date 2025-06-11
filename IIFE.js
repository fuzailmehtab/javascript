// IIFE(immediately invoked function expression)-JO FUNCTION IMMEDIATELY EXECUTE HO JAYE
// GLOBAL SCOPE KE VARIABLES(declarations) KO HATANE KE LIYE

(function norm(){
    // named IIFE hai ye nam  h iska norm
    console.log("here is ")
})();
// pehle parenthesis me function dusre se execution


(  (naam)=>{
    // unnamed iife 
    console.log(`2nd IIFE ${naam}`)
})("papa")