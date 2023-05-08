import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}
export const Button = (props: ButtonPropsType) => {
    const callbackHandler = () => {
        props.callback()
    }
    return (
        <button onClick={callbackHandler}>
            {props.name}
        </button>
    );
};

