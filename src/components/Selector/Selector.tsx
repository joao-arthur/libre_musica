import React from 'react';
import * as Style from './Selector.styles';

interface props {
    options: any[];
}

export default function selector({ options }: props) {
    return (
        <Style.Options>
            <ul>
                {options.map(option => 
                     <Style.Option>{option}</Style.Option>;
                )}
            </ul>
        </Style.Options>
    );
}
