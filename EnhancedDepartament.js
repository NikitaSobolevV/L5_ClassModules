// EnhancedDepartment.js - дочерний класс "Улучшенный отдел"

import { Department } from './Department.js';

export class EnhancedDepartment extends Department {
    // 1. Добавляем новое поле
    #budget; // number - бюджет отдела

    // 2. Конструктор с вызовом родительского
    constructor(name = "", employeeCount = 0, isActive = true, budget = 0) {
        super(name, employeeCount, isActive);
        this.#budget = budget;
    }

    // 3. Геттер и сеттер для нового поля
    get budget() {
        return this.#budget;
    }

    set budget(amount) {
        if (typeof amount === 'number' && amount >= 0) {
            this.#budget = amount;
        } else {
            console.error("Бюджет должен быть неотрицательным числом");
        }
    }

    // 4. Переопределяем метод show()
    show() {
        console.log("=== Информация об улучшенном отделе ===");
        console.log(`Название: ${this.name}`);
        console.log(`Количество сотрудников: ${this.employeeCount}`);
        console.log(`Активен: ${this.isActive ? 'Да' : 'Нет'}`);
        console.log(`Бюджет: ${this.#budget} руб.`);
        // Приватный метод #calculateWorkload() удален (недоступен)
    }

    // 5. Переопределяем метод copy()
    copy() {
        return new EnhancedDepartment(
            this.name,
            this.employeeCount,
            this.isActive,
            this.#budget
        );
    }

    // 6. Переопределяем статический метод clone()
    static clone(department) {
        if (department instanceof EnhancedDepartment) {
            return new EnhancedDepartment(
                department.name,
                department.employeeCount,
                department.isActive,
                department.budget
            );
        }
        return new EnhancedDepartment();
    }

    // 7. Новый публичный метод (опционально)
    increaseBudget(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#budget += amount;
            console.log(`Бюджет увеличен на ${amount} руб. Текущий бюджет: ${this.#budget} руб.`);
        }
    }
}
