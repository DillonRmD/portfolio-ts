

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <h1 className="section-title">{props.title}</h1>
    );
}

