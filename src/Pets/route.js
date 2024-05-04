import express from "express";
import { Pet } from "../models/Pet.js";
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("CHEGOU AQUI");
  const users = await Pet.findAll({});
  console.log("USERS", users);

  return res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const { name, age, porte, entryDate, characteristics } = req.body;

  if (!name || !age || !porte || !entryDate || !characteristics)
    return res.status(400).send({ erro: "Dados faltantes" });

  try {
    const user = await Pet.create({
      name: name,
      age: age,
      porte: porte,
      entryDate: entryDate,
      characteristics: characteristics,
    });

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar a Pet" });
  } catch (error) {
    // handle error so it doesn`t break
    res.status(500).send({ erro: "Nao foi possivel criar a Pet" });
  }
});

router.put("/", async (req, res) => {
  const { id, name, age, porte, entryDate, characteristics } = req.body;

  if (!id || !name || !age || !porte || !entryDate || !characteristics)
    return res.status(400).send({ erro: "Dados faltantes" });

  try {
    const user = await Pet.update(
      {
        name: name,
        age: age,
        porte: porte,
        entryDate: entryDate,
        characteristics: characteristics,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (user[0] === 0) return res.status(404).send({ status: "not found" });

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar a Pet" });
  } catch (error) {
    // handle error so it doesn`t break
    res.status(500).send({ erro: "Nao foi possivel criar a Pet" });
  }
});

export default router;
