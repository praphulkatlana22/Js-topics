const test=new Promise((res,rej)=>{
    try {
        setTimeout(()=>res("resolveee"),3000)
    } catch (error) {
        setTimeout(()=>rej("rejjjj"),7000)
    }
      
    
        
    })


test.then(res=>console.log(res)).catch(e=>console.log(e))