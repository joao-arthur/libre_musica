import { ReactNode } from 'react';
import classNames from 'classnames';

type props = {
    children: ReactNode;
    disabled: boolean;
    onClick?: () => void;
};

export function InputButton({ children, disabled, onClick }: props) {
    return (
        <button
            className={classNames(
                'rounded mx-1 bg-primary-light text-white w-14 h-14 hover:bg-primary active:bg-primary-dark disabled:bg-gray-400',
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
