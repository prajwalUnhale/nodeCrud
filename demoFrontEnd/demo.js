let data = {};
(async()=>{
    let res = await fetch("http://localhost:3000/users")
    let data1 = await res.json();
    console.log(data1);
    data = data1
})()