// Дан массив с работниками.
// У каждого работника есть имя, фамилия, количество отработанных дней и
// зарплатная ставка за день. Выведите этих работников на экран в виде таблицы.
// Сделайте так, чтобы в
// последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней
// умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов.
// Если
// поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите
// суммарную зарплату всех работников.
// let employees = [
// { name: 'SALAMAT', surname: 'BAIKE', days: 20, salaryPerDay: 80 },
// { name: 'Dastan', surname: 'aaa', days: 15, salaryPerDay: 40 },
// { name: 'Emir', surname: 'bbb', days: 22, salaryPerDay: 60 },
// { name: 'Sheraman', surname: 'ccc', days: 15, salaryPerDay: 55 },
// { name: 'Albina', surname: 'kkk', days: 18, salaryPerDay: 44 },
// { name: 'Azret', surname: 'hhh', days: 10, salaryPerDay: 22 },
// { name: 'Mirdin', surname: 'Agai', days: 20, salaryPerDay: 70 },
// { name: 'Bayish', surname: 'zzz', days: 16, salaryPerDay: 33 },
// { name: 'Adilet', surname: 'Gazybekov', days: 11, salaryPerDay: 16 }

import React from "react";
import Table from "./components/Table";

function App() {
  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
  ];

  return (
    <>
      <Table employees={employees} />
    </>
  );
}

export default App;
