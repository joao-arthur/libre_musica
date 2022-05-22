import classNames from 'classnames';
import { TableLabel } from '../TableLabel';

type props = {
    text: string;
    active: boolean;
};

export function TableCell({ text, active }: props) {
    return (
        <td className='h-12 text-center border border-grey-dark'>
            <div
                className={classNames(
                    'inline-flex w-10 h-10 rounded-full text-white',
                    active ? 'bg-primary-dark' : 'bg-primary-light',
                )}
            >
                <TableLabel>{text}</TableLabel>
            </div>
        </td>
    );
}
