const CatchAsync = (fn)=>(req,res,next)=>{
    return Promise.resolve(fn(req,res,next)).catch((e)=>{
        console.log("promise cannnot be fulfilled");
        next(e)
    })
}

module.exports = CatchAsync

