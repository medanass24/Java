// Types primitives ;
console.log(typeof(5))

console.log(typeof("to be or not to be"))

console.log(typeof(undefined))

console.log(typeof(true))

// passage par valeurs ;
let a;
let b;
a=5;
b=a;
b=6;

console.log(a)
console.log(b)

// les types d'objects de base
// passage par reference
let liste=[1,2,3]
let cliste=liste
cliste.push(5)
console.log(liste)
console.log(cliste)

let stagiaire={
    id : 1,
    prenom:"mohamed"
}
let cstg=stagiaire
cstg.age=18

console.log(stagiaire)
console.log(cstg)
// copie 
let liste2=[].concat(liste)
// spread opperator (operation de propagation)
let liste3=[...liste]

let stagiaire3={...stagiaire3}
stagiaire3.branche="do"
Object.assign(stagiaire3.stagiaire)
stagiaire3.annee="2024"
liste2,push(9)
console.log(liste)

Number("3.14")
let y = "5";
let x = + y;
String(123)