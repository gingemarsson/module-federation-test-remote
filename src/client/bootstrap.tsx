import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/app';
import { Wrapper } from './components/wrapper';

const root = ReactDOM.createRoot(document.getElementById('root') as any);

root.render(<Wrapper><App /></Wrapper>);