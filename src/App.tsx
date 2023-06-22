import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Header from "./pages/common/header/Header";
import SearchForm from "./pages/common/searchForm/SearchForm";
import GoodsList from "./pages/common/goodsList/GoodsList";
import {useAppSelector} from "./store/store";
import {LoadingIndicator} from "./components/loadingIndicator/LoadingIndicator";
import AppPagination from "./pages/common/appPagination/AppPagination";
import FeaturesSection from "./pages/common/featuresSection/FeaturesSection";

function App() {
    const {data, pending} = useAppSelector(state => state.goods)
    const [currentPage, setCurrentPage] = useState(1)
    const [goodsPerPage, setGoodsPerPage] = useState(12)
    const indexOfLastItem = currentPage * goodsPerPage
    const indexOfFirstItem = indexOfLastItem - goodsPerPage

    const paginate = (pageNum: number) => setCurrentPage(pageNum)

    return (
        <>
            {pending && <LoadingIndicator/>}
            <Header/>
            <Container>
                <SearchForm/>
                <FeaturesSection />
                {data.length ?
                    <>
                        <GoodsList data={data} indexOfFirstItem={indexOfFirstItem} indexOfLastItem={indexOfLastItem}/>
                        <AppPagination goodsPerPage={goodsPerPage} totalGoods={data.length} paginate={paginate} currentPage={currentPage} />
                    </>
                    : null}
            </Container>
        </>
    );
}

export default App;
