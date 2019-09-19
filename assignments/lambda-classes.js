// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from 
      ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Student {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(name, student, subject) {
    return `${name} debugs ${student}'s code on ${subject}.`;
  }
}

//PERSON

const Josh = new Person({
  name: 'Josh',
  age: 26,
  location: 'Idaho',
});

const Connie = new Person({
  name: 'Connie',
  age: 45,
  location: 'Colorado',
});

const Mark = new Person({
  name: 'Mark',
  age: 55,
  location: 'Utah',
});

//INSTRUCTOR//

const Brit = new Instructor({
  name: 'Brit',
  age: 31,
  location: 'Canada',
  specialty: 'Teaching',
  favLanguage: 'English',
  catchPhrase: 'Hello everyone how are we feeling today?',
});

const Goldie = new Instructor({
  name: 'Goldie',
  age: 40,
  location: 'Montana',
  specialty: 'Big Books',
  favLanguage: 'Sarcasm',
  catchPhrase: 'Lets get started',
});

const Rachel = new Instructor({
  name: 'Rachel',
  age: 36,
  location: 'Florence',
  specialty: 'Baking cakes',
  favLanguage: 'Spanish',
  catchPhrase: 'Who wants to watch a movie?',
});

//STUDENT//
const Jasmine = new Student({
  name: 'Jasmine',
  age: 24,
  location: 'New York',
  previousBackground: 'Parrots',
  className: 'LambdaWeb24',
  favSubjects: 'Classes',
});

const Brad = new Student({
  name: 'Brad',
  age: 30,
  location: 'North Carolina',
  previousBackground: 'Traveling',
  className: 'Web24',
  favSubjects: 'HTML, CSS',
});

const Nate = new Student({
  name: 'Nate',
  age: 27,
  location: 'Los Angeles',
  previousBackground: 'Tech',
  className: 'Lambda',
  favSubjects: 'JavaScript',
});

//PROJECT MANAGER//

const Justin = new ProjectManager({
  name: 'Justin',
  age: 28,
  location: 'US',
  specialty: 'Helping us',
  favLanguage: 'English',
  catchPhrase: 'Hows it going today guys?',
  gradClassName: 'Web20',
  favInstructor: 'Brit',
});

const Ashley = new ProjectManager({
  name: 'Ashley',
  age: 29,
  location: 'Arizona',
  specialty: 'Relationships',
  favLanguage: 'Spanish',
  catchPhrase: 'You know',
  gradClassName: '2012',
  favInstructor: 'Justin',
});

const Laurie = new ProjectManager({
  name: 'Laurie',
  age: 22,
  location: 'Eagle Mountain',
  specialty: 'Blogs',
  favLanguage: 'English',
  catchPhrase: 'I dont know',
  gradClassName: '2015',
  favInstructor: 'Miranda',
});

console.log(Josh.speak());
console.log(Rachel.demo('Javascript'));
console.log(Brit.grade(Jasmine, 'JavaScript'));
console.log(Jasmine.listsSubjects());
console.log(Nate.PRAssignment(Nate, 'Javascript'));
console.log(Ashley.sprintChallenge(Laurie, 'HTML'));
console.log(Ashley.standUp('Channel'));
console.log(Laurie.debugsCode('Logan', 'Harrison', 'Javascript'));
