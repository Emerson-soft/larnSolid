import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserControl = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserControl.handle);

export { authenticateRoutes };
