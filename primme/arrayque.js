const { rawListeners } = require("process")
const fs=require('fs')
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
//console.log("**************")
//var quesss=[]
readline.question("enter no of questions", function(num){
    //readline.question("enter the question", function(questions){ 
        
    console.log (num)
    var questionArray=[]
    var array1=""
    //var newQuestion=new Object();
    //newQuestion.question=questions
    //questionArray.push(newQuestion)

    var recursiveAsyncReadline=function(){
    
        
        if(num==0){
            
           return readline.close()
        }
        else{
            readline.question("enter the question no", function(questionno){
        readline.question("enter the questions \n", function(question){
            readline.question("enter the options", function(options){
                readline.question("enter the optiontype", function(optiontype){
                    readline.question("enter the answer", function(answer){

        var newoob=new Object();
        newoob.questionno=questionno;        
        newoob.question=question
        newoob.option=options
        newoob.optiontype=optiontype
        newoob.answer=answer
        questionArray.push(newoob)
        //console.log(questionArray)
        array1=JSON.stringify(questionArray)
        console.log ("before"+array1)
        recursiveAsyncReadline()
        console.log ("after"+array1)
        fs.writeFile("F:/Desktop Backup/priyanka/objectout.txt", array1, function(err) {
            if(err){
                console.log(err)
                return
            }
            
           const buffer=fs.readFileSync("F:/Desktop Backup/priyanka/objectout.txt")
         const filecontent=buffer.toString()  
        //console.log(filecontent)
        
        }) 
        
    })  
})
            })   
    })
})
    
    }
    num=num-1
    
        

}

    
recursiveAsyncReadline()  
    
       
    

    
        
       
       //console.log(newQuestion)
       //console.log(i)
       //questtions[i].question=questions
        
        
     
    //})
    
 

})
//console.log("@@@@@@@@@@@@@@@@@")

