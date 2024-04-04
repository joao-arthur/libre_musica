import type { JSX, } from "react";
import classNames from "classnames";
import { TableLabel } from "./TableLabel";

type Props = {
    readonly text: string;
    readonly active: boolean;
};

export function TableCell({ text, active }: Props): JSX.Element {
    return (
        <td className="h-12 text-center border border-grey-dark">
            <div
                className={classNames(
                    "inline-flex w-10 h-10 rounded-full text-white",
                    active ? "bg-primary-dark" : "bg-primary-light",
                )}
            >
                <TableLabel>{text}</TableLabel>
            </div>
        </td>
    );
}
