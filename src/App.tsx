import React from 'react';
import {Container} from "react-bootstrap";
import Header from "./pages/common/header/Header";
import SearchForm from "./pages/common/searchForm/SearchForm";
import HomeImg from "./pages/common/homeImg/HomeImg";
import ItemsList from "./pages/common/itemsList/ItemsList";
import {items} from "./services/entities/Items";

function App() {
    return (
        <>
            <Header/>
            <Container>
                <SearchForm/>
                <ItemsList data={items} />
                <HomeImg/>
            </Container>
        </>
    );
}

export default App;
