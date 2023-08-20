import Laptops from "./models/laptops";

const isDev=true

const dbInt=()=>{
    Laptops.sync({alter:isDev})
}

export default dbInt