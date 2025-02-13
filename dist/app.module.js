"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/entities/user.entity");
const mongoose_1 = require("@nestjs/mongoose");
const bicycle_module_1 = require("./bicycle/bicycle.module");
const whybycycle_module_1 = require("./whybycycle/whybycycle.module");
const admin_module_1 = require("./admin/admin.module");
const station_module_1 = require("./station/station.module");
const suggestions_module_1 = require("./suggestions/suggestions.module");
const reviews_module_1 = require("./reviews/reviews.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/bycycle?retryWrites=true&w=majority'),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: process.env.MongoUrl,
                useNewUrlParser: true,
                synchronize: true,
                logging: true,
                entities: [user_entity_1.User],
            }),
            user_module_1.UserModule,
            bicycle_module_1.BicycleModule,
            whybycycle_module_1.WhybycycleModule,
            admin_module_1.AdminModule,
            station_module_1.StationModule,
            suggestions_module_1.SuggestionsModule,
            reviews_module_1.ReviewsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map