import { sequelize } from "./database/connect.js";
import router from "./User/route.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({}));
app.use(express.json());

(async () => {
  try {
    console.log("ENTROU");
    await sequelize.authenticate();
    console.log("DB AUTH");
  } catch (error) {
    console.log("ERROR", error);
  }
})();

app.use("/users", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
