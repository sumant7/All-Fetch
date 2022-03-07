//getText button
document.getElementById('getText').addEventListener('click',getText)

function getText(){
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




//getJson
document.getElementById('getUsers').addEventListener('click',getUsers)

function getUsers(){
    fetch('users.json')
    .then((res)=>res.json())
    .then((data)=>{
        let output= '<h3>Users</h3>'
        data.forEach(function(user){
            output += `
            <ul>
                <li>ID: ${user.id} </li>
                <li>Name: ${user.name} </li>
                <li>Email: ${user.email} </li>
            </ul>
            `
        })
        a = document.getElementById('output')
        if(a.innerHTML=="")
        {
            a.innerHTML=output
        }
        else
        {
            a.innerHTML=''
        }
    })
}