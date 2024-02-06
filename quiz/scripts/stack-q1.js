class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

  // Getter method for 'persons'
  get persons() {
    return this._persons;
  }

  // Setter method for 'persons'
  set persons(value) {
    // Ensure that only arrays can be assigned to 'persons'
    if (Array.isArray(value)) {
      this._persons = value;
    } else {
      console.error("Invalid assignment. 'persons' must be an array.");
    }
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}];
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
