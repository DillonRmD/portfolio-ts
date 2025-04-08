import {BackdropItem} from "../businessObjects/BackdropItem.ts";
import React from "react";

interface UseBackdropResult {
    items: BackdropItem[];
    getStyle: (item: BackdropItem) => React.CSSProperties;
}

export default function useBackdrop(): UseBackdropResult {
    const shapeVariants = ["rounded-full", "rounded-md", "rotate-45", ""];

    const items: BackdropItem[] = [];
    for (let i = 0; i < 50; i++) {
        const size = 20 + Math.random() * 40;
        const shape = shapeVariants[Math.floor(Math.random() * shapeVariants.length)];
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 2;
        const delay = Math.random() * 10;

        items.push(new BackdropItem(
            size,
            shape,
            top,
            left,
            duration,
            delay
            )
        );
    }

    const getStyle = (item: BackdropItem) => ({
        top: item.getTop,
        left: item.getLeft,
        width: item.getWidth,
        height: item.getHeight,
        animationDuration: item.getDuration,
        animationDelay: item.getDelay,
    } as React.CSSProperties)

    return {items, getStyle};
}