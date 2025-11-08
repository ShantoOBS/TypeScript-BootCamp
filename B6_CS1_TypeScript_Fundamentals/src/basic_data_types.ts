const str: string = 'Abrar';
// ss bb nn u -> string, symbol, bigint, boolean, undefined, number, null.
// non-primitive array, object.

let anyVar: number = 1;

let arr: number[] = [1,2,3]


export type TObj = {
   name: string
   age : number
   education?: {
    institution : 'University' | 'COllege' | 'Diploma' | "School" 
    level: string
   }
}

const obj : TObj = {
    name: 'Mansur',
    age: 21,
    education: {
        institution: 'COllege',
        level: "Undergrad"
    }
}
