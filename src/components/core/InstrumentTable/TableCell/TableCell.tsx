import classNames from 'classnames';
import { TableLabel } from '../TableLabel';

type props = {
    text: string;
    active: boolean;
    onClick: () => void;
};

export function TableCell({ text, active, onClick }: props) {
    return (
        <td
            className='cursor-pointer h-12 text-center border border-grey-dark'
            onClick={onClick}
        >
            <div
                className={classNames(
                    'inline-flex w-10 h-10 rounded-full text-white',
                    active ? 'bg-primary-dark' : 'bg-primary-light'
                )}
            >
                <TableLabel>{text}</TableLabel>
            </div>
        </td>
    );
}
