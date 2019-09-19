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
    return `Today we are learning about ${this.subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${this.subject}`;
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
  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge() {
    return `${student.name} has begun sprint challenge on ${this.subject}`;
  }
}

class ProjectManager extends Student {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${this.channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.names}'s code on ${this.subject}`;
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
  previousBackground: 'ProgrammersForPeace',
  favLanguage: 'English',
  catchPhrase: 'Hello everyone how are we feeling today?',
});

const Goldie = new Instructor({
    name: 'Goldie',
    age: 40,
    location: 'Montana',
    previousBackground: 'EnglishDegree',
    favLanguage: 'Sarcasm',
    catchPhrase: 'Lets get started`,
  });

  const Rachel = new Instructor({
    name: 'Rachel',
    age: 36,
    location: 'Florence',
    previousBackground: 'College',
    favLanguage: 'Spanish',
    catchPhrase: 'Who wants to watch a movie?',
  });
