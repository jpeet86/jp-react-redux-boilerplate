import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/ui/Counter/';
import store from './state/store';
import './App.css';

function App() {
    return (
        <Provider store={ store }>
            <div className="container">
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
