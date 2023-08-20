import { Dialect,Sequelize } from "sequelize";

const getconnection=() => {
    return new Sequelize("database11","root","password",{

        host:"localhost",
        port:parseInt("3306"||"3306"),
        dialect:'mysql',
    })
}

const sequelizeConnection=getconnection()
export default sequelizeConnection;

