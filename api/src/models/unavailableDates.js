import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const { DATE, STRING, INTEGER } = DataTypes;
const unavailableDates = sequelize.define("unavailableDates", {
  id: {
    type: INTEGER,
    autoincrement: true
  },
  date: {
    type: DATE,
    primaryKey: true,
  },
  data: {
    type: STRING,
  },
});

export default unavailableDates;
