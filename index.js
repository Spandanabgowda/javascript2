const getDataBtn=document.getElementById('getData')

getDataBtn.addEventListener("click",()=>{
    getweatherData()
})

function getweatherData(){
    const data=fetch('')]
    
    
    data.then((response)=>{
        console.log(response)
        return response.json()
    }).then((weatherData)=>{
        console.log(weatherData)
    })


}







// let dataAyakya=true
// let weatherData=new Promise(function(res,rej){

    
//     if(dataAyakya===true){
//         res("weather is good")
//     }
//     else{
//         rej("din't get data")
//     }
// })
// weatherData.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })

// Promises --> i promise to resolve or reject in future
// resolve,reject,pending
// resolve and reject are two diff functions