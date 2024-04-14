import type { JSX, ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export function BasePage({ children }: Props): JSX.Element {
    return (
        <div className="flex h-svh">
            <div className="block w-full h-full">
                {children}
            </div>
        </div>
    );
}
