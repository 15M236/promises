async function makeDance(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("inside promise 1 before resolve")
            resolve("step 1")
            console.log("inside promise 1 after resolve")
        },2000)
    })
}

async function makeFolk(){
    let x = 30
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(x > 100){
                resolve("greater than 100")
            }
            else 
                reject(new Error("less than 100"))
        }, 2000)
    })
}

async function doSomething(){

    console.log("dance")

    // await makeDance()
    // .then((value) => console.log(value))
    // .catch((error) => console.log(error))

    
    // .then((value) => console.log(value))
    // .then(() => console.log("second link"))
    // .catch((error) => console.log(error))

    try {
        let result = await makeFolk()
        console.log(result)
    } catch (error) {
        console.log("Error: " +error.message)
    }
    finally{
        console.log("completes")
    }
    
}

doSomething()