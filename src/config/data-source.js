import "reflect-metadata";
import { DataSource } from "typeorm";
import { Draw } from "../resources/draw/entities/draw.entity.js";
import { Raffle } from "../resources/raffle/entities/raffle.entity.js";
import { User } from "../resources/user/entities/user.entity.js";

export const AppDataSource = new DataSource({
  type: "postgresql",
  host: `${process.env.HOST}`,
  port: 3306,
  username: `${process.env.DATABASEUSER}`,
  password: `${process.env.PASSWORD}`,
  database: `${process.env.DATABASE}`,
  synchronize: true,
  logging: false,
  entities: [Raffle, User, Draw],
  migrations: [],
  migrationsTableName: "migrations",
  subscribers: [],
});
