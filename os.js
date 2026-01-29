let count=0;
let a= setInterval(()=>{
    readfileStream();
    count++;
    if(count==5){
        clearInterval(a);
    }
},5000);