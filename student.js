function Student(Name, roll, cls, sec, mrk) {
    this.Name = Name;
    this.roll = roll;
    this.cls = cls;
    this.sec = sec;
    this.mrk = mrk;
  
    this.card = function () {
        
        console.log(this.Name);
        console.log( this.roll);
        console.log(this.cls);
        console.log(this.sec);
        console.log(this.mrk.join(", "));
      
    };
  }
  
  let stud_one = new Student(" Ankur", 16, "p", "I", [11, 14, 15, 10, 9]);
  let stud_two= new Student("Ravi", 12, "q", "I", [20,5, 12, 9, 10]);
  let stud_three = new Student("Aarti", 11, "r", "II", [12, 18, 14, 10, 17]);
  let stud_four = new Student("Ankit", 10, "t", "II", [8, 8, 5, 9, 6]);
  let stud_five = new Student(" Ashwani", 3, "e", "III", [19, 9, 3, 6, 7]);
  
  
  
  stud_One.reportcard();