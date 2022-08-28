const usertest = new Promise((resolve, reject) => {{
    setTimeout(()=> {
        let rollno = [1,2,3,4,5];
        resolve(rollno);
        // reject("Error in processing");
    }  ,2000)
}})

usertest.then((rollno)=>{
    console.log(rollno);
}).catch((err)=>{
    console.log(err);
})