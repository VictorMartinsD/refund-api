import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { refundsRoutes } from "./refunds-routes";
import { sessionsRoutes } from "./sessions-routes";

const routes = Router();

// Rotas públicas
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

// Rotas privadas
routes.use("/refunds", refundsRoutes);

export { routes };
