import { render } from '@testing-library/react';
import { useEffect } from "react";
import { useStore } from "./store";
import { test, expect, vi } from 'vitest';


function TestComponent({selector, effect}) {
    const items = useStore(selector);

    useEffect(()=> effect(items), [items]);
    
    return null;
}

test('should return default value at the start ', () => {
    const selector = (store) => store.tasks;
    const effect = vi.fn();
    render(<TestComponent selector={selector} effect={effect}/>);
    expect(effect).toHaveBeenCalledWith([]);
});