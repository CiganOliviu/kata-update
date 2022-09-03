class DeployToStaging {
    public constructor() {
        console.log('Deploy to staging');
    }
}

class DeployToProduction {
    public constructor() {
        console.log('Deploy to production');
    }
}

class NoDeployment {
    public constructor() {
        console.log('No deployment');
    }
}

type deploymentType = DeployToStaging | DeployToProduction | NoDeployment;

class IFactoryObjectDeployment {

    public createNewDeployment: (deployment: string) => deploymentType;

    public constructor() {
        this.createNewDeployment = (deployment: string): deploymentType => {
            if (deployment === 'staging') {
                return new DeployToStaging();
            }
            if (deployment === 'production') {
                return new DeployToProduction()
            }

            return new NoDeployment();
        }
    }
}

const main = () => {
    const factoryObjectDeployment = new IFactoryObjectDeployment();
    const stagingDeployment = factoryObjectDeployment.createNewDeployment('staging');
    const productionDeployment = factoryObjectDeployment.createNewDeployment('production');
    const noDeployment = factoryObjectDeployment.createNewDeployment('none');
}

main();