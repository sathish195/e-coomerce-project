// import { Router,Request,Response, response } from "express";

// import Laptops,{laptopInput,laptopOutput} from "../db/models/laptops";
// // import { error } from "console";

// const laptopRouter=Router()

// laptopRouter.post('/',async(req:Request,res:Response) => {
//     // try{
//     //     const reqData=req.body;
//     //     const response=await Laptops.create(reqData);
//     //     res.send({message:'success',data:response})
//     // }

//     // catch(error:any){
//     //     res.send(error.message?.error)
//     //         }
//     res.send("hello")
// })

// export default laptopRouter
import { Router,Request,Response } from "express";

// import User,{useresInput,useresOutput} from '../db/models/shop'
 import Laptops,{laptopInput,laptopOutput} from "../db/models/laptops";


const postRouter=Router()

postRouter.post('/',async(req:Request,res:Response) => {
    try{
        const reqData=req.body
        const response=await Laptops.create(reqData)
        res.send({message:"sucess",data:response})
    }
    catch(error:any){
        res.send({message:"error"})
    }
}
)
export default postRouter;