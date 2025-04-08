import useBackdrop from '../../features/Landing/hooks/useBackdrop.ts';
import '../../features/Landing/css/backdrop.css';

export default function Backdrop() {
    const {items, getStyle} = useBackdrop();

    return (
        <>
            <div className="absolute top-0 left-0 w-full pointer-events-none h-full z-0">
                {items.map((item, i) => (
                    <div
                        key={`${i}-${item.getShape}-${item.getDuration}`}
                        className={`absolute bg-[#272343] opacity-10 animate-float ${item.getShape}`}
                        style={getStyle(item)}
                    />
                ))}
            </div>
            <style>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(-20px) scale(1.05);
                    }
                    100% {
                        transform: translateY(0px) scale(1);
                    }
                }

                .animate-float {
                    animation-name: float;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </>
    );
}