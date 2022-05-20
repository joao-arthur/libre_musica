import classNames from 'classnames';

type props = {
    options: readonly string[];
    onChange: (option: string) => void;
    selected: string;
    title: string;
    mode?: 'square' | 'rectangle';
};

export function Selector({
    options,
    onChange,
    selected,
    title,
    mode = 'rectangle'
}: props) {
    return (
        <div className='flex-auto'>
            <h3 className='text-center'>{title}</h3>
            <div className='flex py-1 justify-around'>
                {options.map(option => (
                    <button
                        className={classNames(
                            'flex items-center justify-center text-white border-none outline-none h-14 rounded text-center hover:bg-primary',
                            option === selected
                                ? 'bg-primary-dark'
                                : 'bg-primary-light',
                            mode === 'square'
                                ? 'w-14'
                                : mode === 'rectangle'
                                ? 'w-40'
                                : ''
                        )}
                        key={option}
                        onClick={() => onChange(option)}
                    >
                        <span>{option}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
