export default class Project {
    private readonly title: string;
    private readonly description: string;
    private readonly tech: string[];
    private readonly imageSource: string;
    private readonly redirectLink: string;
    private readonly sourceLink: string;

    constructor(title: string, description: string, tech: string[], imageSource: string, redirectLink: string, sourceLink: string) {
        this.title = title;
        this.description = description;
        this.tech = tech;
        this.imageSource = imageSource;
        this.redirectLink = redirectLink;
        this.sourceLink = sourceLink;
    }

    get getTitle(): string {
        return this.title;
    }

    get getDescription(): string {
        return this.description;
    }

    get getTech(): string[] {
        return this.tech;
    }

    get getImageSource(): string {
        return this.imageSource;
    }

    get getRedirectLink(): string {
        return this.redirectLink;
    }

    get getSourceLink(): string {
        return this.sourceLink;
    }
}