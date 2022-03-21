const { exit } = require("process")

const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question(`enter the number?`, function(num) {
    //console.log(`hi ${Number(num)}!`)
    var n=Number(num)
    if (n==1){
        console.log(`composite no`)
    }
    else if(n==2){
        console.log(`is prime`)
    }
    else if(n>2){
         if(n%2==0){
             console.log(`not prime`)
         }
         else{
             var noo=(n+1)/2
             var count=0
             for(i=2;i<=noo;i++){
                 if(n%i==0){
                     console.log(`not prime`)
                    break;
                 }
                else{
                    count=count+1
                    if(count==(noo-2)){
                        console.log(`is prime`)
                    }

                
                 }
             }
             
         }
    }
    //console.log(Number(num)+4)
    readline.close()
})
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })*/
  