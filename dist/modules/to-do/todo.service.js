"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_repositores_1 = require("./repositores/todo.repositores");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async createNewTodoItem(text, dificult) {
        const data = {
            text,
        };
        if (dificult < 0)
            data['dificult'] = 0;
        else if (dificult <= 25)
            data['dificult'] = 25;
        else if (dificult <= 25)
            data['dificult'] = 50;
        else if (dificult <= 25)
            data['dificult'] = 75;
        else
            data['dificult'] = 100;
        const entity = await this.todoRepository.registerItem(data);
        return entity;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [todo_repositores_1.TodoRepository])
], TodoService);
//# sourceMappingURL=todo.service.js.map