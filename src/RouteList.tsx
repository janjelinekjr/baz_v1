import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";

function RouteList() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>

            </Route>
        </Routes>
    </BrowserRouter>
}

export default RouteList