class Student {
  learn() {
    console.log('learn'); 
  }

  question(teacher) {
    console.log('question');
    teacher.answer();
    }
}

class Teacher {
  teach(student) {
    console.log('teach');
    student.learn();
  }

  public answer() {
    console.log('answer');
    
  }

}

let stu = new Student();
let tea = new Teacher();

stu.question(tea);
tea.teach(stu);

