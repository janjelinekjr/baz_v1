import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Header from "./pages/common/header/Header";
import SearchForm from "./pages/common/searchForm/SearchForm";
import HomeImg from "./pages/common/homeImg/HomeImg";
import GoodsList from "./pages/common/goodsList/GoodsList";
import {useAppSelector} from "./store/store";
import {LoadingIndicator} from "./components/loadingIndicator/LoadingIndicator";
import AppPagination from "./pages/common/pagination/AppPagination";

function App() {
    const {data, pending} = useAppSelector(state => state.goods)
    const [currentPage, setCurrentPage] = useState(1)
    const [goodsPerPage, setGoodsPerPage] = useState(12)
    const indexOfLastItem = currentPage * goodsPerPage
    const indexOfFirstItem = indexOfLastItem - goodsPerPage
    const currentGoods = data.slice(indexOfFirstItem, indexOfLastItem)
    const paginate = (pageNum: number) => setCurrentPage(pageNum)

    return (
        <>
            {pending && <LoadingIndicator/>}
            <Header/>
            <Container>
                <SearchForm/>
                {data.length ?
                    <>
                        <GoodsList data={currentGoods}/>
                        <AppPagination goodsPerPage={goodsPerPage} totalGoods={data.length} paginate={paginate} currentPage={currentPage} />
                    </>
                    : <HomeImg/>}
            </Container>
        </>
    );
}

export default App;
