import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouteList from "./RouteList";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouteList/>
        </Provider>
    </React.StrictMode>
);
