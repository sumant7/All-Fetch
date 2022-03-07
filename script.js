//getText button
document.getElementById('getText').addEventListener('click',getText)

function getText(){
    // fetch('sample.txt')  //basic function approach
    // .then(function(res){
    //     return res.text()
    // })
    // .then(function(data){
    //     console.log(data)
    // })
    //arrow function is cleaner
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=>{
        let output= document.getElementById('output')
        if(output.innerHTML=="")
        {
            output.innerHTML=data
        }
        else
        {
            output.innerHTML=''
        }
    })
}