let a = 20;
let b = 0;

// let writingData = new Promise((resoleve,reject)=>{
//     setTimeout(()=>{
//         resoleve(20)
//     },2000)
// }).then((data)=>{
//     b=data;
//     console.log(a+b);
// })


let writingData = new Promise((resoleve,reject)=>{
    setTimeout(()=>{
        resoleve(20)
    },2000)
})

writingData.then((data)=>{
    b=data;
    console.log(a+b);
})