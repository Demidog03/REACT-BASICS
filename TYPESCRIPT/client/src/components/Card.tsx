import {FC, ReactNode, useState} from 'react';

export enum CardVariants {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps{
    width?: string;
    height?: string;
    variant: CardVariants;
    children?: ReactNode;
    onClick: (message: string) => void;
}

const Card: FC<CardProps> = ({width, height, variant, children, onClick}) => {
    const [state, setState] = useState("Hi")

    return (
        <div style={{width, height,
            border: variant === CardVariants.outlined ? "1px solid gray" : "none",
            backgroundColor: variant === CardVariants.primary ? "lightgray" : ""}}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
