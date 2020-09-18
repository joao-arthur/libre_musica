import React, { useState } from 'react';
import { strings, getNote, getScale } from '../../core/notes';
import range from '../../core/range';
import {
    Container,
    Label
} from '../../Components/Core/InstrumentTable/TableCell/TableCell.styles';
import Selector from '../../Components/Core/Selector';
import NumberSelector from '../../Components/Core/NumberSelector';
import InstrumentTable from '../../Components/Core/InstrumentTable';
import { Separator } from './Scales.styles';

export default () => {
    const [scale, setScale] = useState(0);
    const [scaleKind, setScaleKind] = useState(0);
    const [fretNumber, setFretNumber] = useState(11);

    const actualScale = getScale(scale);

    const generateStringNotes = (stringNote: number) =>
        range(fretNumber + 1).map(i => ({
            note: getNote((stringNote + i) % 12),
            active: actualScale.includes((stringNote + i) % 12)
        }));

    return (
        <>
            <Separator>
                <Selector
                    options={[
                        { name: 'diatonic', value: 0 },
                        { name: 'harmonic', value: 1 },
                        { name: 'double harmonic', value: 2 },
                        { name: 'pentatonic', value: 3 }
                    ]}
                    selected={scaleKind}
                    onChange={setScaleKind}
                    title='Scale'
                />
                <NumberSelector
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                    title='Frets'
                />
            </Separator>
            <Selector
                options={[
                    { name: 'C', value: 0 },
                    { name: 'C#', value: 1 },
                    { name: 'D', value: 2 },
                    { name: 'D#', value: 3 },
                    { name: 'E', value: 4 },
                    { name: 'F', value: 5 },
                    { name: 'F#', value: 6 },
                    { name: 'G', value: 7 },
                    { name: 'G#', value: 8 },
                    { name: 'A', value: 9 },
                    { name: 'A#', value: 10 },
                    { name: 'B', value: 11 }
                ]}
                selected={scale}
                onChange={setScale}
                title='Key'
                mode='square'
            />
            <InstrumentTable
                body={strings.map(generateStringNotes)}
                foot={range(fretNumber + 1).map(i => (
                    <Container key={i} size={fretNumber}>
                        <Label>
                            <b>{i}</b>
                        </Label>
                    </Container>
                ))}
            />
        </>
    );
};
