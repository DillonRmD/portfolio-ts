import '../css/tech-card.css'

interface TechCardProps {
    techName: string,
}

export default function TechCard(props: TechCardProps) {

    const { techName } = props;

    return(
        <div className="tech-card">
            <span className="tech-card-content">{techName}</span>
        </div>
    );
}