interface IBuilderPatternDeploy {
    buildPartOne(): void;
    buildPartTwo(): void;
    buildPartThree(): void;
}

class DevelopmentEnvironment {
    private parts: string[] = [];

    public addParts = (part: string) => {
        this.parts.push(part);
    }

    public listParts = () => {
        console.log(`Development parts: ${this.parts.join(', ')}\n`);
    }
}

class ConcreteBuilder implements IBuilderPatternDeploy {
    private developmentEnvironment: DevelopmentEnvironment = new DevelopmentEnvironment();

    public constructor() {
        this.resetDevelopmentEnvironment();
    }

    private resetDevelopmentEnvironment = () => {
        this.developmentEnvironment = new DevelopmentEnvironment();
    }

    public buildPartOne(): void {
        this.developmentEnvironment.addParts('PartOneOfDevelopment');
    }

    public buildPartTwo(): void {
        this.developmentEnvironment.addParts('PartTwoOfDevelopment');
    }
    
    public buildPartThree(): void {
        this.developmentEnvironment.addParts('PartThreeOfDevelopment');
    }

    public getDevelopmentEnvironment = () => {
        const result = this.developmentEnvironment;
        this.resetDevelopmentEnvironment();
        return result;
    }
}

class Director {
    public concreteBuilder: ConcreteBuilder;

    constructor(newConcreteBuilder: ConcreteBuilder) {
        this.concreteBuilder = newConcreteBuilder;
    }

    public buildMVPProduct = () => {
        this.concreteBuilder.buildPartOne();
    }

    public buildCompleteProduct = () => {
        this.concreteBuilder.buildPartOne();
        this.concreteBuilder.buildPartTwo();
        this.concreteBuilder.buildPartThree();
    }
}

const main = () => {
    const concreteBuilder = new ConcreteBuilder();
    const director = new Director(concreteBuilder);
    director.buildMVPProduct();
    concreteBuilder.getDevelopmentEnvironment().listParts();

    console.log('=========================================');

    director.buildCompleteProduct();
    concreteBuilder.getDevelopmentEnvironment().listParts();
}

main();