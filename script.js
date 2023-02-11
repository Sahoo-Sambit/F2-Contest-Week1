/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
PrintStudentswithMap();
function PrintStudentswithMap() {
  //Write your code here , just console.log
  let names = arr.filter(stu => stu.marks > 50).map(stu => stu.name)
  console.log(names); 
}

PrintStudentsbyForEach();
function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student.name);
    }
  });
}

addData();
function addData() {
  //Write your code here, just console.log
  const newStudent={id:4,name:"susan",age:"20",marks:45};
  arr.push(newStudent);
  console.log(arr);
}

removeFailedStudent();
function removeFailedStudent() {
  //Write your code here, just console.log
    arr = arr.reduce((acc, student) => {
  if (student.marks >= 50) {
    acc.push(student);
  }
  return acc;
}, []);

console.log(arr);
}

concatenateArray();
function concatenateArray() {
  //Write your code here, just console.log
  const moreStudents = [
    { id: 5, name: "Sambit", age: "18", marks: 75 },
    { id: 6, name: "Sahoo", age: "28", marks: 25 },
    { id: 7, name: "Titun", age: "10", marks: 45 }
  ];
  const allStudents = arr.concat(moreStudents);
  console.log(allStudents);
}
