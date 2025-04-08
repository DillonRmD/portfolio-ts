export class Experience {
    private readonly employer: string = '';
    private readonly title: string = '';
    private readonly startDate: string = '';
    private readonly endDate: string = '';
    private readonly accomplishments: string[] = [];

    constructor(
        employer: string,
        title: string,
        startDate: string,
        endDate: string,
        accomplishments: string[]
    ) {
        this.employer = employer;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.accomplishments = accomplishments;
    }

    get getEmployer(): string {
        return this.employer;
    }

    get getTitle(): string {
        return this.title;
    }

    get getStartDate(): string {
        return this.startDate;
    }

    get getEndDate(): string {
        return this.endDate;
    }

    get getAccomplishments(): string[] {
        return this.accomplishments
    }
}