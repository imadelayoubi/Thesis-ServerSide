"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleModule = void 0;
const common_1 = require("@nestjs/common");
const bicycle_service_1 = require("./bicycle.service");
const bicycle_controller_1 = require("./bicycle.controller");
const mongoose_1 = require("@nestjs/mongoose");
const bicycle_entity_1 = require("./entities/bicycle.entity");
let BicycleModule = class BicycleModule {
};
BicycleModule = __decorate([
    (0, common_1.Module)({
        providers: [bicycle_service_1.BicycleService],
        controllers: [bicycle_controller_1.BicycleController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bicycle_entity_1.Bicycle.name, schema: bicycle_entity_1.BicycleSchema }]),
        ],
    })
], BicycleModule);
exports.BicycleModule = BicycleModule;
//# sourceMappingURL=bicycle.module.js.map