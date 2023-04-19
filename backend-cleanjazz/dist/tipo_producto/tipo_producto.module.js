"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoProductoModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_producto_controller_1 = require("./tipo_producto.controller");
const tipo_producto_service_1 = require("./tipo_producto.service");
let TipoProductoModule = class TipoProductoModule {
};
TipoProductoModule = __decorate([
    (0, common_1.Module)({
        controllers: [tipo_producto_controller_1.TipoProductoController],
        providers: [tipo_producto_service_1.TipoProductoService]
    })
], TipoProductoModule);
exports.TipoProductoModule = TipoProductoModule;
//# sourceMappingURL=tipo_producto.module.js.map