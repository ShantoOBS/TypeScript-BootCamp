{
    function fn (input: string | number | boolean | 'Osthir'):void{
        if(typeof input === 'number'){
            console.log('narrow number',input*2);
        }else if(typeof input === 'string'){
            console.log(input.length);
        }else{
            console.log(1);
        }
    }


    type TUser = {
        name: string,
        age: number
    }

    type Tlearner = {
        attitude: "learning"
    }

    type combined = TUser & Tlearner

    interface IUser {
        name: string
        age: number
    }

    interface ILearner extends IUser{
        attitude: "learning"
    }

    // interface Ilearner {}

    const learner: combined = {
        name: "Salman",
        age: 23,
        attitude: 'learning'
    }


    // generic
    function identity <T>(value : T) : T[] {
        return [value];
    }

    interface IYouLearner<T> extends IUser {
        attitude: T
    }

    const user23 : IYouLearner<string | number> ={
        name: "test",
        age: 102,
        attitude:1
    }

    //constraints -> [string, number, number] ////   T[k] // ans: 1
    // [] ______ user23[name] = string

    function getProperty<T, K extends keyof T>(obj:T, key: K):T[K] {
        return obj[key];
    }

    const name = getProperty(user23, "age");

    // console.log(typeof name);

    //asynchronus TS
    async function fetchUser () : Promise<string> {
        return "str";
    }

    const myPromise = new Promise((resolve, reject) => {
        const success = true;
      
        setTimeout(() => {
          if (success) {
            resolve("✅ Promise resolved successfully!");
          } else {
            reject("❌ Promise rejected due to an error.");
          }
        }, 1000);
      });

      myPromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetchUser().then((user)=>console.log(user))
    // extisting 


    // interface IUser {
    //     name: string
    //     age: number
    // }

    // interface ILearner extends IUser{
    //     attitude: "learning"
    // }

    type result<T> = {
        [J in keyof T] : boolean
    }

    const resultTest : result<ILearner> = {
        name: true,
        age: true,
        attitude: true
    };

    // utility 

    type unchangeable = Readonly<ILearner>;

    const user420: unchangeable = {
        name: "Sahos thakle change kore dekhan",
        age: 30,
        attitude: 'learning'
    }
}