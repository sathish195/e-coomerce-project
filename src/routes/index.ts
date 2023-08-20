import { Router, Request, Response, } from 'express';
import Laptops from './laptops.route';






const Route = Router()


Route.use('/laptops',Laptops)




export default Route


