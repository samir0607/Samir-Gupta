const {readFile,writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8', (err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-sync.txt',
      `Here is my result: ${first}, ${second}`,(err,result)=>{
        if(err){
          console.log(err)
          return
        }
        console.log(result)
        console.log('done with this task')
      })
  })
})
console.log('starting new task')