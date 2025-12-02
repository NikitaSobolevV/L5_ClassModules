// index.js - основной файл для демонстрации

import { EnhancedDepartment } from './EnhancedDepartment.js';

// Создаем массив из 2 экземпляров класса с разными значениями
const departments = [
    new EnhancedDepartment("IT-отдел", 15, true, 500000),
    new EnhancedDepartment("Отдел маркетинга", 8, true, 300000)
];

// Вызываем в обоих метод show()
console.log("=== Демонстрация работы классов ===");
console.log("\nПервый отдел:");
departments[0].show();

console.log("\nВторой отдел:");
departments[1].show();

// Демонстрация геттеров/сеттеров
console.log("\n=== Тест геттеров/сеттеров ===");
departments[0].name = "Информационные технологии";
departments[0].employeeCount = 20;
departments[0].budget = 600000;
console.log(`Обновленные данные: ${departments[0].name}, ${departments[0].employeeCount} сотрудников`);

// Демонстрация метода copy()
console.log("\n=== Тест метода copy() ===");
const copiedDept = departments[0].copy();
console.log("Скопированный отдел:");
copiedDept.show();
console.log("Оригинал и копия равны (===)?", departments[0] === copiedDept);

// Демонстрация статического метода clone()
console.log("\n=== Тест статического метода clone() ===");
const clonedDept = EnhancedDepartment.clone(departments[1]);
console.log("Клонированный отдел:");
clonedDept.show();
console.log("Оригинал и клон равны (===)?", departments[1] === clonedDept);

// Демонстрация delete()
console.log("\n=== Тест метода delete() ===");
departments[1].delete();
departments[1].show();

// Демонстрация нового метода
console.log("\n=== Тест нового метода increaseBudget() ===");
departments[0].increaseBudget(100000);
departments[0].show();
