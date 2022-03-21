const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
console.log("program started")
readline.question(`enter the question no`,function(no){
    console.log(no)
    readline.question("what is expected", function(expectations){
        console.log(expectations)
        readline.question("your name please", function(name){
           console.log("my name is"+name)

           var recursiveAsyncReadLine=function(){
               readline.question("question please",function(question){
                   if(no==1){
                       return readline.close()
                   }
                   else{
                       recursiveAsyncReadLine()
                       no=no-1
                   }
               })
           }
           recursiveAsyncReadLine()
            //readline.close()
            //for(i=0;i<no;i++){
              //  readline.question("what is your name-repeat the question"+i+"th time", function(answerss){
                //    console.log(i,answerss)
            //readline.close()
                    
                })
        
})
})

console.log("program ended")
