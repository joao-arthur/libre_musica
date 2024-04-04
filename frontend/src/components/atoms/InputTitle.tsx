import type { JSX } from "react";

type Props = {
    readonly children: string;
};

export function InputTitle({ children }: Props): JSX.Element {
    return <h3 className="text-lg">{children}</h3>;
}
