import type { JSX, ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export function TableLabel({ children }: Props): JSX.Element {
    return <p className="text-center m-auto">{children}</p>;
}
