import React from 'react';
import * as Style from './UniqueSelector.styles';

interface props {
    options: any[];
}

export default ({ options }: props) => (
    <Style.Options>
        {options.map((option, index) => (
            <Style.Option key={index} onClick={() => console.log(option)}>
                <Style.Text>{option}</Style.Text>
            </Style.Option>
        ))}
    </Style.Options>
);
