"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const validateJWT_1 = require("../middleware/validateJWT");
const userController_1 = require("../controllers/userController");
const cardController_1 = require("../controllers/cardController");
const router = express_1.default.Router();
router.post('/auth', authController_1.authController);
router.get('/getUser', validateJWT_1.validateJWT, userController_1.userController);
router.get('/getCards', validateJWT_1.validateJWT, cardController_1.cardController);
exports.default = router;
