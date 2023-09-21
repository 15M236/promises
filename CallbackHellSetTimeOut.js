
function function1(init, callback) {
    console.log("top1")
    callback(init + 1)
}

function function2(init, callback) {
    console.log("top2")
    callback(init+2)
}

function function3(init, callback) {
    console.log("top3")
    callback(init+3)
}

async function doSomething() {
    let x = 0 ;

        console.log(x)

        async function insideFunction(x){
            return new Promise((resolve) => {
                setTimeout(() => resolve(x),5000)
            })
        }

        let newPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve("The object has been rectified")
                    // reject(new Error('fail'));
                }, 3000);
            });

        
            let a = await insideFunction(x)
            console.log("direct function",a)

        // console.log(await newPromise)

        console.log("------")
}

doSomething()
 
/*    
                setTimeout(() => {function2( x , (x) => {     
            console.log("1000 micro seconds")   
        })} ,1000)
                setTimeout(() => {function3( x , (x) => {
                    console.log("30 micro seconds")
                })} , 30 ) 
    */

