import { instrument } from '../../../features/instruments';
import { notes, noteType } from '../../../features/notes';
import { arrayFns } from '../../../lib/objects/arrayFns';
import { TableCell } from './TableCell';
import { TableLabel } from './TableLabel';

type props = {
    numberOfFrets: number;
    scaleNote: noteType['number'];
    scaleKind: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic';
    numberOfStrings: number;
    selectedInstrument: 'bass' | 'guitar';
    tuningKind: string;
};

export function InstrumentTable({
    numberOfFrets,
    scaleNote,
    scaleKind,
    numberOfStrings,
    selectedInstrument,
    tuningKind,
}: props) {
    const tuning = (instrument[selectedInstrument] as any).tunings[
        numberOfStrings
    ][tuningKind].map(baseNote =>
        notes.getNotesRange(baseNote, numberOfFrets + 1),
    );

    function getScales(
        scale: 'diatonic' | 'harmonic' | 'doubleHarmonic' | 'pentatonic',
    ) {
        switch (scale) {
            case 'diatonic':
                return [0, 2, 4, 5, 7, 9, 11];
            case 'harmonic':
                return [0, 2, 4, 5, 7, 8, 11];
            case 'doubleHarmonic':
                return [0, 1, 4, 5, 7, 8, 11];
            case 'pentatonic':
                return [0, 2, 4, 7, 9];
        }
    }

    const currentScale = getScales(scaleKind).map(
        noteOfScale => (noteOfScale + scaleNote) % 12,
    );

    return (
        <table className='w-full border-collapse bg-grey-light'>
            <tbody>
                {tuning.map((row, index) => (
                    <tr key={index}>
                        {row.map((currentNote, i) => (
                            <TableCell
                                key={i}
                                text={notes.getNoteName(
                                    currentNote,
                                    'standard',
                                )}
                                active={currentScale.includes(
                                    currentNote.number,
                                )}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    {arrayFns.range(numberOfFrets + 1).map(i => (
                        <td
                            className='h-12 text-center border border-grey-dark'
                            key={i}
                        >
                            <TableLabel>
                                <b>{i}</b>
                            </TableLabel>
                        </td>
                    ))}
                </tr>
            </tfoot>
        </table>
    );
}
