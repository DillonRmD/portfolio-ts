import {BackdropItem} from "../../../features/Landing/businessObjects/BackdropItem.ts";
import React from "react";

interface BackdropShapeProps {
    item: BackdropItem;
}

export default function BackdropShape(props: BackdropShapeProps) {
    const {item} = props;

    const style = {
        top: item.getTop,
        left: item.getLeft,
        width: item.getWidth,
        height: item.getHeight,
        animationDuration: item.getDuration,
        animationDelay: item.getDelay,
    } as React.CSSProperties;

    return (
        <div
            className={`absolute bg-[#272343] opacity-10 animate-float ${item.getShape}`}
            style={style}
        />
    )
}