(() => {

    type Gender = 'M'|'F';

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    const newPerson = new Person('Engelber', 'M', new Date('1991-03-12'));

    console.log({newPerson});

})()