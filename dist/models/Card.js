"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cardSchema = new mongoose_1.default.Schema({
    status: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, default: null },
    consumption: {
        totalConsumption: { type: Number, default: null },
    },
    flag: { type: String, required: true },
    country: { type: String, required: true },
    plan: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
});
exports.Card = mongoose_1.default.model('Card', cardSchema);
