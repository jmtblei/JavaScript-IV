// CODE here for your Lambda Classes

// Person
class Person {
    constructor(personatt) {
        this.name = personatt.name;
        this.age = personatt.age;
        this.location = personatt.location;
        this.gender = personatt.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// Instructor
class Instructor extends Person {
    constructor(instatt) {
        super(instatt);
        this.specialty = instatt.specialty;
        this.favLanguage = instatt.favLanguage;
        this.catchPhrase = instatt.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    };
    grade(Student, subject) {
        console.log(`${Student.name} receieves a perfect score on ${subject}.`)
    }
    grading(Student) {
        const check = Math.floor(Math.random() *  50);
        console.log(`${Student.name} receieved a grade of ${Student.grade -= check} from ${this.name}.`)
    }
}

// Students
class Student extends Person {
    constructor(stuatt) {
        super(stuatt);
        this.previousBackground = stuatt.previousBackground;
        this.className = stuatt.className;
        this.favSubjects = stuatt.favSubjects;
        this.grade = 100;
    }
    listsSubject() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
        // console.log(`${this.favSubjects}`)
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`) 
    }
    graduate() {
        if (this.grade > 70) {
            console.log(`${this.name} received a grade of ${this.grade} and is eligible to graduate!`);
        } else {
            console.log(`${this.name} received a grade of ${this.grade} and needs to retake for a regrade.`)
        }
    }
}

// PM

class PM extends Instructor {
    constructor(pmatt) {
        super(pmatt);
        this.gradClassName = pmatt.gradClassName;
        this.favInstructor = pmatt.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    };
    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`)
    }
}

// Objects

const Michael = new Instructor({
    name: 'Michael',
    location: 'Scranton',
    age: 41,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `No, God, please, no! No! No! NOOOOOOO!`
  });

const Jim = new Instructor({
    name: 'Jim',
    location: 'Scranton',
    age: 27,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Data-Science',
    catchPhrase: `Today is Thursday. But Dwight thinks that it’s Friday…and that’s what I will be working on this afternoon`
  }); 

const Dwight = new Student({
    name: 'Dwight',
    location: 'Lackawanna County',
    age: 33,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: `MICHAEL!`,
    previousBackground: 'Head Salesman',
    className: 'CS111',
    favSubjects: ['React', 'Python', 'Ruby'],
  });

  const Pam = new Student({
    name: 'Pam',
    location: 'Scranton',
    age: 26,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I'm guessing Angela is the one in the neighborhood that gives the trick-or-treaters toothbrushes. Pennies. Walnuts.`,
    previousBackground: 'Office Administrator',
    className: 'Web18',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });

  const Stanley = new PM({
    name: 'Stanley',
    location: 'Detroit',
    age: 58,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Data-Science',
    catchPhrase: `You've been meatballed! Are ya ready for some MEATBALL?`,
    gradClassName: 'CS1',
    favInstructor: 'Not Michael',
  }); 

  const Karen = new PM({
    name: 'Karen',
    location: 'Stamford',
    age: 30,
    gender: 'female',
    favLanguage: 'SQL',
    specialty: 'Database management',
    catchPhrase: `Pam is... kind of a bitch.`,
    gradClassName: 'CS112',
    favInstructor: 'Jim',
  }); 


// Test
console.log(Michael.age);//Testing Instructor inheriting Person properties
Michael.speak();//Testing Instructor inheriting Person method
console.log(Michael.catchPhrase);//Testing Instructor properties
console.log(Michael.specialty);
console.log(Michael.favLanguage);
Jim.demo('JavaScript');//Testing Instructor methods
Jim.grade(Pam, 'Html');
Dwight.speak(); //Testing Student inheriting Person method
console.log(Dwight.className);//Testing Student properties
console.log(Dwight.previousBackground);
console.log(Dwight.favSubjects);
Dwight.listsSubject();//Testing Student methods
Pam.listsSubject();
Pam.PRAssignment('Html');
Pam.sprintChallenge('JavaScript');
Stanley.speak();//Testing PM inheriting Person method
console.log(Stanley.catchPhrase);//Testing PM inheriting Instructor properties
console.log(Stanley.gradClassName);//Testing PM properties
console.log(Stanley.favInstructor);
Karen.standUp('web_18ah');//Testing PM methods
Karen.debugsCode(Dwight, 'Ruby');
Michael.grading(Pam);//Testing Instructor grading method
Pam.graduate();//Testing Student graduate method
Stanley.grading(Dwight);//Testing PM inheriting Instructor grading method
Dwight.graduate();//Testing Student graduate method



