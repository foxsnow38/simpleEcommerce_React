function FirstFactorial(num) { 
    let a =1
      for(let i=num ; i>0; i--)
      {
        console.log(a)
        a = a*i
      }
      return a; 
    
    }

    console.log(
        FirstFactorial(8))