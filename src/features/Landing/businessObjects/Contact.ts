export class Contact {
    private readonly description: string = '';
    private readonly link: string = '';

    constructor(description: string, link: string) {
        this.description = description;
        this.link = link;
    }

    get getDescription(): string {
        return this.description;
    }

    get getLink(): string {
        return this.link;
    }
}