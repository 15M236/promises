const Promise1 = async() =>{
    return new Promise( (resolve,reject) => {
        setTimeout(() =>
            resolve("first promise resolved")
        ,2000)
    })
}

// async function Promise1(){
//     return new Promise( (resolve,reject) => {
//         setTimeout(() =>
//             resolve("first promise resolved")
//         ,2000)
//     })
// }

const Promise2 = async() => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => 
            resolve("second promise resolved")
        ,2000)
    })
}

// async function Promise2() {
//     return new Promise( (resolve,reject) => {
//         setTimeout(() => 
//             resolve("second promise resolved")
//         ,2000)
//     })
// }

const Promise3 = async() => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>
        resolve("third promise resolved")
        ,2000)
    })
}

// async function Promise3(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>
//             resolve("third promise resolved")
//         ,1000)
//     })
// }

// async function doSomething(){
//     try{
//         let promise1 = await Promise1()
//         .then(async(value) => {
//             console.log(value)
//             try{
//                 let promise2 = await Promise2()
//                 .then(async(value) => {
//                     console.log(value)
//                     try {
//                         let promise3 = await Promise3()
//                         .then(async(value) => {
//                             console.log(value)
//                         })
//                     }catch(error){
//                         console.log(error)
//                     }
//                 })
//             }catch(error){
//                 console.log(error)
//             }
//         })
//     }catch(error){
//         console.log(error)
//     }
// }


//     let promise1 = await Promise1()
//     .then(async(value) => {
//         console.log(value)
//         let promise2 = await Promise2()
//         .then(async(value) => {
//             console.log(value)
//             let promise3 = await Promise3()
//             .then((value) => {
//                 console.log(value)
//             })
//             .catch(error => console.log(error))
//         })
//         .catch(error => console.log(error))
//     })
//     .catch(error => console.log(error))
// }

async function doSomething(){
    await Promise.all([Promise1(),Promise2(),Promise3()]).then((values) => console.log(values))
    // const promises = [Promise1,Promise2,Promise3]
    // await Promise.allSettled(promises)
    // .then((values) => values.forEach((value) => console.log(value)))
}

doSomething()




//all method