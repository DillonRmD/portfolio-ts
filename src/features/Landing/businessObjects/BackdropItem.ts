export class BackdropItem {
    private readonly size: number = 0;
    private readonly shape: string = '';
    private readonly top: number = 0;
    private readonly left: number = 0;
    private readonly duration: number = 0;
    private readonly delay: number = 0;

    constructor(
        size: number,
        shape: string,
        top: number,
        left: number,
        duration: number,
        delay: number
    ) {
        this.size = size;
        this.shape = shape;
        this.top = top;
        this.left = left;
        this.duration = duration;
        this.delay = delay;
    }

    get getWidth(): string {
        return `${this.size}px`;
    }

    get getHeight(): string {
        return `${this.size}px`;
    }

    get getShape(): string {
        return this.shape;
    }

    get getTop(): string {
        return `${this.top}%`;
    }

    get getLeft(): string {
        return `${this.left}%`;
    }

    get getDuration(): string {
        return `${this.duration}s`;
    }

    get getDelay(): string {
        return `${this.delay}s`;
    }
}