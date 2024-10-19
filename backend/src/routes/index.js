const router = require("express").Router();
const routes= [
    {
        path:'/auth',
        router: require("./Auth.route")
    }
]

routes.forEach((cur)=>{
    router.use(cur.path,cur.router);
})

module.exports = router;