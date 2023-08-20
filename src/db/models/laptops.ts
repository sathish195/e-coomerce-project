import { DataTypes,Model,Optional} from "sequelize";
import sequelizeConnection from "../config";

interface LaptopAttributs{
    id:number,
    name:string,
    cost:number,

    CreatedAt?:Date;
    UpdatedAt?:Date;
    DelatedAt?:Date;
}

export interface laptopInput extends Optional<LaptopAttributs,'id'> { }
export interface laptopOutput extends Required<LaptopAttributs> { }

class Laptops
extends Model<LaptopAttributs,laptopInput>
implements LaptopAttributs{

    public id!:number;
    public name!:string;
    public cost!:number;

    public readonly CreatedAt!: Date;
    public readonly UpdatedAt!: Date;
    public readonly DelatedAt!: Date;

}

Laptops.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
    },
    cost:{
        type:DataTypes.INTEGER,
    }
},
{
    timestamps:true,
    sequelize:sequelizeConnection,
    paranoid:true


});

export default Laptops

