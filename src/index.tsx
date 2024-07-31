import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

if (!root) {
    throw new Error('ROOT не найден!');
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
