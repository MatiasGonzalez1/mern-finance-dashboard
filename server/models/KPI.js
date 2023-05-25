import Mongoose from "mongoose";
import {loadType} from "mongoose-currency";



const Schema = Mongoose.Schema;
loadType(Mongoose)

const daySchema = new Schema(
  {
    date: String,
    revenue:{
      type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
    },
    expenses:{
      type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
    },
  },
  {toJSON:{getters:true}}
)

const monthSchema = new Schema(
  {
    month: String,
    revenue:{
      type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
    },
    expenses:{
      type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
    },
    operationalExpenses:{
      type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
    },
  },
  {toJSON:{getters:true}}
)

const KPISchema = new Schema(
  {
    totalProfit:{
      type: Mongoose.Types.Currency,
      //currency se multiplica siempre por 100 por tal motivo luego se tiene que dividir
      currency: "USD",
      get: (v)=> v/100
    },
      totalRevenue:{
        type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
      },
      totalExpences:{
        type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
      },
      expensesByCategory:{
        type: Map,
        of:{
        type: Mongoose.Types.Currency,
        currency: "USD",
        get: (v)=> v/100
        }
      },
      monthlyData:[monthSchema],
      daylyData:[daySchema] 
  },
  {timestamps:true,toJSON:{getters:true}}
);

const KPI = Mongoose.model("KPI", KPISchema);

export default KPI;