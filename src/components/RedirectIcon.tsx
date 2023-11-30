import '../css/redirect-icon.css';


export enum RedirectIconType {
    GITHUB = 0,
    ARROW_POINTING_UP = 1,
}

interface RedirectIconProps {
    link: string;
    iconType: RedirectIconType;
}

export function RedirectIcon(props: RedirectIconProps) {

    const { link, iconType } = props;


    const getIconImage = (iconType: RedirectIconType): string => {
        switch (iconType) {
            case RedirectIconType.GITHUB:
                return 'https://simpleicons.org/icons/github.svg';
            case RedirectIconType.ARROW_POINTING_UP:
                return 'https://www.svgrepo.com/show/529353/arrow-right-up.svg';
            default:
                return '';
        }
    }

    return(
    <a 
            className="redirect-img-hover"
            href={link}
            target="_blank" 
            rel="noreferrer">
            <img
            className="redirect-img"
            src={getIconImage(iconType)}
            alt="Redirect Image"
            width="25"
            />
            </a> 
        
    );
}