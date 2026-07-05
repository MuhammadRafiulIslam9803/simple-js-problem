let studentsMarks = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for (const student of studentsMarks){
    let studentName = student.name;
    let studentMarks = student.marks;
    console.log(`${studentName}: scored ${studentMarks} % .`);
}