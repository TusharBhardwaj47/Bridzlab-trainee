import js from "js"

function registerUser(name,email,password){
    try{
        let user=[];
        let ob ={
            name,email,password,todo:[]
        }
        if(fs.existsSync("todo.json")){
            let data=JSON.parse(fs.readFileSync("todo.json","utf-8"));
            let isUser=data.some((value)=>value.name===name);
            if(isUser){

                return "user already exists";
            }

            user=data;
        }
        user.push(ob);
        fs.writeFileSync("todo.json",JSON.stringify(user,null,2));
        return {message:"user registered successfully",user:ob
            

           



        }
    }catch(error){
        console.log(error);

    }




}export default registerUser

