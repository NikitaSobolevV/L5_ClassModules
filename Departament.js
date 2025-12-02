// Department.js - родительский класс "Отдел"

export class Department {
    // 1. Три поля разных типов
    #name;          // string - название отдела
    #employeeCount; // number - количество сотрудников
    #isActive;      // boolean - активен ли отдел

    // 2. Конструктор
    constructor(name = "", employeeCount = 0, isActive = true) {
        this.#name = name;
        this.#employeeCount = employeeCount;
        this.#isActive = isActive;
    }

    // 3. Геттеры и сеттеры для каждого поля
    get name() {
        return this.#name;
    }

    set name(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this.#name = newName;
        } else {
            console.error("Название отдела должно быть непустой строкой");
        }
    }

    get employeeCount() {
        return this.#employeeCount;
    }

    set employeeCount(count) {
        if (typeof count === 'number' && count >= 0) {
            this.#employeeCount = count;
        } else {
            console.error("Количество сотрудников должно быть неотрицательным числом");
        }
    }

    get isActive() {
        return this.#isActive;
    }

    set isActive(status) {
        if (typeof status === 'boolean') {
            this.#isActive = status;
        } else {
            console.error("Статус активности должен быть boolean");
        }
    }

    // 4. Публичные методы
    
    // a. show() - выводит все доступные поля
    show() {
        console.log("=== Информация об отделе ===");
        console.log(`Название: ${this.#name}`);
        console.log(`Количество сотрудников: ${this.#employeeCount}`);
        console.log(`Активен: ${this.#isActive ? 'Да' : 'Нет'}`);
        // Вызываем приватный метод для дополнительной информации
        this.#calculateWorkload();
    }

    // b. delete() - "удаляет" экземпляр (делает его неактивным)
    delete() {
        this.#isActive = false;
        console.log(`Отдел "${this.#name}" помечен как удаленный`);
    }

    // c. copy() - создает ссылку на экземпляр
    copy() {
        return this;
    }

    // 5. Условно-приватный метод (#)
    #calculateWorkload() {
        const workload = this.#employeeCount > 10 ? "Высокая" : "Нормальная";
        console.log(`Нагрузка на отдел: ${workload}`);
    }

    // 6. Статичный метод clone() - создает новый экземпляр
    static clone(department) {
        if (department instanceof Department) {
            return new Department(
                department.name,
                department.employeeCount,
                department.isActive
            );
        }
        return new Department();
    }
}
