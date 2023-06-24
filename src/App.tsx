import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Header from "./pages/common/header/Header";
import SearchForm from "./pages/common/searchForm/SearchForm";
import GoodsList from "./pages/common/goodsList/GoodsList";
import {useAppSelector} from "./store/store";
import {LoadingIndicator} from "./components/loadingIndicator/LoadingIndicator";
import AppPagination from "./pages/common/appPagination/AppPagination";
import clsx from "clsx";
import {ArrowUpCircleFill} from "react-bootstrap-icons";

function App() {
    const {data, pending} = useAppSelector(state => state.goods)
    const [currentPage, setCurrentPage] = useState(1)
    const [goodsPerPage, setGoodsPerPage] = useState(12)
    const indexOfLastItem = currentPage * goodsPerPage
    const indexOfFirstItem = indexOfLastItem - goodsPerPage

    const [showScrollTop, setShowScrollTop] = useState(false)

    const show = () => {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            setShowScrollTop(true)
        } else {
            setShowScrollTop(false)
        }
    }

    window.onscroll = () => {
        show()
    }

    const paginate = (pageNum: number) => setCurrentPage(pageNum)

    return (
        <>
            {pending && <LoadingIndicator/>}
            <Header/>
            <Container>
                {showScrollTop &&
                    <div className={clsx('top-btn')}>
                        <Button
                            variant={'outline-primary'}
                            className={clsx('btn-outline-hover')}
                            onClick={() => {
                                document.body.scrollTop = 0;
                                document.documentElement.scrollTop = 0;
                            }}
                        >
                            <span className={clsx('d-flex', 'align-items-center', 'gap-2',)}><ArrowUpCircleFill size={20}/><span>Nahoru</span></span>
                        </Button>
                    </div>
                }
                <SearchForm/>
                {data.length ?
                    <>
                        <GoodsList data={data} indexOfFirstItem={indexOfFirstItem} indexOfLastItem={indexOfLastItem}/>
                        <AppPagination goodsPerPage={goodsPerPage} totalGoods={data.length} paginate={paginate}
                                       currentPage={currentPage}/>
                    </>
                    : null}
            </Container>
        </>
    );
}

export default App;
