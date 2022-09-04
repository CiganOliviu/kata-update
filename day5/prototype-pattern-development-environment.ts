declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

class DevelopmentEnvironmentPrototype {
    private developmentStage: string = '';
    private releaseDate: object = Object.assign({});

    public setDevelopmentStage = (developmentStage: string) => {
        this.developmentStage = developmentStage;
    }

    public getDevelopmentStage = (): string => {
        return this.developmentStage;
    }

    public setReleaseDate = (releaseDate: object) => {
        this.releaseDate = releaseDate;
    }

    public getReleaseDate = (): object => {
        return this.releaseDate;
    }

    public clone = () => {
        const clone = Object.create(this);
        clone.releaseDate = Object.create(this.releaseDate);

        return clone;
    }
}

const main = () => {
    const prototype = new DevelopmentEnvironmentPrototype();
    prototype.setDevelopmentStage('Prod');
    prototype.setReleaseDate(new Date());

    const developmentEnvironmentCopy = prototype.clone();
    console.log(developmentEnvironmentCopy.getDevelopmentStage());
    console.log(developmentEnvironmentCopy.getReleaseDate());
}

main();