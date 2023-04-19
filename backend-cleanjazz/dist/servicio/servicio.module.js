"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioModule = void 0;
const common_1 = require("@nestjs/common");
const servicio_controller_1 = require("./servicio.controller");
const servicio_service_1 = require("./servicio.service");
let ServicioModule = class ServicioModule {
};
ServicioModule = __decorate([
    (0, common_1.Module)({
        controllers: [servicio_controller_1.ServicioController],
        providers: [servicio_service_1.ServicioService]
    })
], ServicioModule);
exports.ServicioModule = ServicioModule;
//# sourceMappingURL=servicio.module.js.map