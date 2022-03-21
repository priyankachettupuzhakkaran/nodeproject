const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
var num=6
for(i=0;i<num;i++){
    //console.log(i)
    console.log("loop started")
    var strring="enter the"+" "+ i +" " +"th question"
    //console.log(strring)
    readline.question(strring, function(question){
        console.log("loop going")
        console.log(i)
        if(i==num){
            readline.close()
        }
    })
}
console.log("end of loop")