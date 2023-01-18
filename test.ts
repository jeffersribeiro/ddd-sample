let person = {
  name: "John Joe",
  getName: function () {
    console.log(this.name);
  },
};

let f = person.getName.bind(person);

setTimeout(f, 1000);

interface Runner {
  name: string;
  run: (speed: number) => void;
}

let runner: Runner = {
  name: "Runner",
  run: function (speed: number) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};

let flayer: Runner = {
  name: "Flayer",
  run: function (speed: number) {
    console.log(this.name + "flies at " + speed + " mph.");
  },
};

const run = runner.run.bind(flayer, 1200);

run();

function greet(greeting: string, message: string) {
  return `${greeting} ${this.name} ${message}`;
}

const result = greet.apply(person, ["Hello", "How are you?"]);

console.log(result);
