import React from 'react';
import {Container} from "react-bootstrap";
import Header from "./pages/common/header/Header";
import SearchForm from "./pages/common/searchForm/SearchForm";
import HomeImg from "./pages/common/homeImg/HomeImg";
import GoodsList from "./pages/common/itemsList/GoodsList";
import {useAppSelector} from "./store/store";
import {LoadingIndicator} from "./components/loadingIndicator/LoadingIndicator";

function App() {
    const {data, pending} = useAppSelector(state => state.goods)

    return (
        <>
            {pending && <LoadingIndicator/>}
            <Header/>
            <Container>
                <SearchForm/>
                {data.length ? <GoodsList data={data}/> : <HomeImg/>}
            </Container>
        </>
    );
}

export default App;
