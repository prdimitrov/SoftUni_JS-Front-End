function createCat(arrayInput) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    arrayInput
        .map(line => line.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow())


}
createCat(['Mellow 2', 'Tom 5']);
createCat(['Candy 1', 'Poppy 3', 'Nyx 2']);