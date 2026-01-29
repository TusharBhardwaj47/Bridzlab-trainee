function createStudent(name, ID, classes){

    try{
        let studentsJson=[];
        let ob={
            name, id, classes
        }
        if(fs.existsSync('students.json')){
            let data= fs.readFileSync('students.json','utf-8');
            console.log(data);

            if(data){
                studentsJson= JSON.parse(data);
                console.log(data);
            }
        }
        studentsJson.push(ob);
        fs.writeFileSync('students.json', JSON.stringify(studentsJson,null));
        return "student created successfully";
    } catch(error){
        console.log("error in creating student", error);
}
}
export default createStudent;

