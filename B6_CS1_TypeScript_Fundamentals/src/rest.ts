{
    type TNickname = 'Mushkil Asan' | 'Ural ponkhi'


    const bondhu : TNickname = 'Ural ponkhi';

    type A = {bondhu: "Upokari"}
    type B = {sotru: number }

    type AB = A & B

    const robot: AB = {
        bondhu: "Upokari",
        sotru: 2
    }
    // let age;
    // age = 21;
    // if(age>=18){
    //     console.log('first')
    // }else{
    //     console.log('No Second')
    // }


    // age = 21;
    // const status = age>=18 ?  "Voter" : "Shishu" ;
    let age = 'test'

    // if(typeof age == 'number'){
    //     type voter = number  
    // }

    

    type VoterType = typeof age extends number? number : string;


    interface Iuser {
        name: string;
        age: number;
        address: {
            country: string;
            city: string;
        };
    }

    const user : Iuser  = {
        name: 'jekono',
        age: 201,
        address: {
            country: 'BD',
            city: "Dhaka"
        }
    }

    console.log(user?.address?.city);

    const input = null;
    const userInput  = input ?? "GuestMajor"

    // function crash ():never{
    //     throw new Error("Error hoye geche bhai!!!")
    // }
    // crash();

    let nm: unknown = 'Tanjim';

    console.log(( <string>nm).length)
    console.log((nm as string).length)

    // console.log(status);
}