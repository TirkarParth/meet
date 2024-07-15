// src/__tests__/App.test.js

import React from 'react';
import { render, act } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    test('renders list of events', () => {
        let container;
        act(() => {
            ({ container } = render(<App />));
        });
        const AppDOM = container.firstChild;
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });
});

