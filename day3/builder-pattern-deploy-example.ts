interface BuilderDeploy {
    runPipeline(): void;
    deployStaging(): void;
    deployProduction(): void;
}

class DevelopmentEnvironment {
    private developmentParts: string[] = [];

    public addDevelopmentPart = (developmentPart: string) => {
        this.developmentParts.push(developmentPart);
    }

    public listDevelopmentParts = () => {
        console.log(`Development parts: ${this.developmentParts.join(', ')}\n`)
    }
}

class ConcreteBuilderDeploy implements BuilderDeploy {

    private developmentEnvironment: DevelopmentEnvironment = new DevelopmentEnvironment();

    resetDeploymentProcess = () => {
        this.developmentEnvironment = new DevelopmentEnvironment();
    }

    constructor() {
        this.resetDeploymentProcess();
    }

    deployProduction = (): void => {
        console.log('Deployment to production!!');
    }

    deployStaging = (): void => {
        console.log('Deployment to staging!!');
    }

    runPipeline = (): void => {
        console.log('Run pipeline!!');
    }

    getDevelopmentEnvironment = () => {
        const result = this.developmentEnvironment;
        this.resetDeploymentProcess();
        return result;
    }
}

class Director {
    private builderDeploy: ConcreteBuilderDeploy;

    constructor(newBuilderDeploy: ConcreteBuilderDeploy) {
        this.builderDeploy = newBuilderDeploy;
    }

    public buildStagingEnvironment = () => {
        this.builderDeploy.runPipeline();
        this.builderDeploy.deployStaging();
    }

    public buildProdEnvironment = () => {
        this.builderDeploy.runPipeline();
        this.builderDeploy.deployStaging();
        this.builderDeploy.deployProduction();
    }
}

const main = () => {
    const concreteBuilderDeploy = new ConcreteBuilderDeploy();
    const directorBuilderDeploy = new Director(concreteBuilderDeploy);
    directorBuilderDeploy.buildStagingEnvironment();
    concreteBuilderDeploy.getDevelopmentEnvironment();

    console.log('========================');

    directorBuilderDeploy.buildProdEnvironment();
    concreteBuilderDeploy.getDevelopmentEnvironment();
}

main();