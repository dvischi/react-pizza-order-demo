import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from '@/components/Checkbox';

describe('Checkbox', () => {
    test('if a label is set', () => {
        const Container = () => {
            return (
                <Checkbox label={"label"} checked={false} onChange={() => {}} />
            );
        };
        const { container } = render(<Container />);
        const label = container.querySelectorAll("label")[0] as HTMLLabelElement;
        expect(label.textContent).toBe("label");
    });

    test('if a change is triggered when clicked', () => {
        const Container = () => {
            const [isChecked, setIsChecked] = useState(false);
            return (
                <Checkbox label={"label"} checked={isChecked}  onChange={() => setIsChecked(!isChecked)} />
            );
        };
        const { container } = render(<Container />);
        const checkbox = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement;
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
    });
});
