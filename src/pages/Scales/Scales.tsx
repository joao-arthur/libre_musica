import { useState } from 'react';
import { instruments, instrumentNames } from '../../features/instruments';
import { SelectField } from '../../components/molecules/SelectField';
import { NumberField } from '../../components/molecules/NumberField';
import { InstrumentTable } from './InstrumentTable';
import { instrument } from '../../features/instruments/instrument';
import { notes, noteType } from '../../features/notes';
import { scales } from '../../features/scales/scales';

const instrumentOptions = instruments.getOptions();
const scaleKindOptions = scales.getOptions();
const notesOptions = notes.getOptions();

type tuningsKindType =
    | {
          instrument: 'guitar';
          stringNumber: 6 | 7 | 8;
      }
    | {
          instrument: 'bass';
          stringNumber: 4 | 5 | 6;
      };

export function Scales() {
    const [selectedInstrument, setInstrument] = useState<
        typeof instrumentOptions[number]['value']
    >(instrumentOptions[0].value);
    const [scaleNote, setScale] = useState<noteType['number']>(0);
    const [fretNumber, setFretNumber] = useState(11);
    const [numberOfStrings, setStringNumber] = useState<number>(
        instrument.guitar.numberOfStrings.default,
    );
    const [scaleKind, setScaleKind] = useState<
        typeof scaleKindOptions[number]['value']
    >(scaleKindOptions[0].value);
    const [tuningKind, setTuningKind] = useState('standard');

    function getTuningKind({ instrument, stringNumber }: tuningsKindType) {
        switch (instrument) {
            case 'guitar':
                switch (stringNumber) {
                    case 6:
                        return [
                            { label: 'standard', value: 'standard' },
                            { label: 'nst', value: 'nst' },
                            { label: 'dropd', value: 'dropd' },
                            { label: 'dropc', value: 'dropc' },
                            { label: 'dadgad', value: 'dadgad' },
                            { label: 'dadaad', value: 'dadaad' },
                            { label: 'incinerate', value: 'incinerate' },
                        ];
                    case 7:
                        return [{ label: 'standard', value: 'standard' }];
                    case 8:
                        return [{ label: 'standard', value: 'standard' }];
                }
            case 'bass':
                switch (stringNumber) {
                    case 4:
                        return [
                            { label: 'standard', value: 'standard' },
                            { label: 'nst', value: 'nst' },
                            { label: 'dropd', value: 'dropd' },
                            { label: 'dropc', value: 'dropc' },
                        ];
                    case 5:
                        return [{ label: 'standard', value: 'standard' }];
                    case 6:
                        return [{ label: 'standard', value: 'standard' }];
                }
        }
    }

    const tuningKinds = getTuningKind({
        instrument: selectedInstrument,
        stringNumber: numberOfStrings as any,
    });

    return (
        <>
            <div className='flex'>
                <SelectField
                    title='Instrument'
                    name='instrument'
                    options={instrumentOptions}
                    value={selectedInstrument}
                    onChange={newInstrument => {
                        setInstrument(newInstrument as instrumentNames);
                        setStringNumber(
                            instrument[newInstrument as instrumentNames]
                                .numberOfStrings.default,
                        );
                        setTuningKind('standard');
                    }}
                />
                <NumberField
                    min={11}
                    max={24}
                    value={fretNumber}
                    onChange={setFretNumber}
                    title='FretnotesOptionss'
                />
                <NumberField
                    min={instrument[selectedInstrument].numberOfStrings.min}
                    max={instrument[selectedInstrument].numberOfStrings.max}
                    value={numberOfStrings}
                    onChange={newStringNumber => {
                        setStringNumber(newStringNumber as any);
                        setTuningKind('standard');
                    }}
                    title='String number'
                />
                <SelectField
                    name='scaleKind'
                    title='Scale kind'
                    options={scaleKindOptions}
                    value={scaleKind}
                    onChange={setScaleKind}
                />
                <SelectField
                    title='Tuning kind'
                    name='tuningKind'
                    options={tuningKinds}
                    value={tuningKind}
                    onChange={newValue => setTuningKind(newValue as any)}
                />
                <SelectField
                    title='Key'
                    name='key'
                    options={notesOptions}
                    value={scaleNote}
                    onChange={setScale}
                />
            </div>
            <InstrumentTable
                numberOfFrets={fretNumber}
                scaleNote={scaleNote}
                scaleKind={scaleKind}
                selectedInstrument={selectedInstrument}
                numberOfStrings={numberOfStrings}
                tuningKind={tuningKind}
            />
        </>
    );
}
