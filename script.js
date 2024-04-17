/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const result = arr.map((employee) => {
    if (employee.profession == "developer") {
      return employee;
    }
  });
  console.log(result);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  developers.forEach((result) => {
    console.log(result);
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filteredEmployees = arr.filter((employee) => {
    return employee.profession !== "admin";
  });
  console.log( filteredEmployees);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "emma", age: "22", profession: "designer" },
    { id: 5, name: "mike", age: "25", profession: "manager" },
    { id: 6, name: "lisa", age: "21", profession: "developer" },
  ];
  const NewconcatenatedArray = arr.concat(newArray);
  console.log(NewconcatenatedArray);
}
