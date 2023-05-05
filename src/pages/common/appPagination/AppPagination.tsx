import {Pagination} from "react-bootstrap";

type AppPaginationProps = {
    goodsPerPage: number
    totalGoods: number
    currentPage: number
    paginate: (num: number) => void
}

const AppPagination = ({goodsPerPage, totalGoods, currentPage, paginate}: AppPaginationProps) => {
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
        pageNumbers.push(i)
    }

    // const controlPaginationLength = () => {
    //     const paginationItems = []
    //
    //     if(pageNumbers.length <= 2) {
    //         for(let i = 0; i <= pageNumbers.length - 1; i++) {
    //             paginationItems.push(<Pagination.Item key={pageNumbers[i]} active={currentPage === pageNumbers[i]} onClick={() => {
    //                 paginate(pageNumbers[i])
    //             }}>{pageNumbers[i]}</Pagination.Item>)
    //         }
    //     }
    //     if(pageNumbers.length > 2) {
    //         for(let i = 0; i <= 1; i++) {
    //             paginationItems.push(<Pagination.Item key={pageNumbers[i]} active={currentPage === pageNumbers[i]} onClick={() => {
    //                 paginate(pageNumbers[i])
    //             }}>{pageNumbers[i]}</Pagination.Item>)
    //         }
    //         paginationItems.push(<><Pagination.Ellipsis /><Pagination.Item active={currentPage === pageNumbers.length} onClick={() => {
    //             paginate(pageNumbers.length)
    //         }}>{pageNumbers.length}</Pagination.Item></>)
    //     }
    //
    //     return paginationItems
    // }

    return (
        <div className='d-flex justify-content-center mt-4'>
            <Pagination>
                <Pagination.First onClick={() => {
                    paginate(pageNumbers[0])
                }}/>
                <Pagination.Prev onClick={() => {
                    const prevPage: number = currentPage !== 1 ? currentPage - 1 : 1
                    paginate(prevPage)
                }}/>
                {pageNumbers.map((num) => {
                        return <Pagination.Item key={num} active={currentPage === num} onClick={() => {
                            paginate(num)
                        }}>{num}</Pagination.Item>
                })}
                <Pagination.Next onClick={() => {
                    const nextPage: number = currentPage !== pageNumbers.length ? currentPage + 1 : pageNumbers.length
                    paginate(nextPage)
                }}/>
                <Pagination.Last onClick={() => {
                    paginate(pageNumbers[pageNumbers.length - 1])
                }}/>
            </Pagination>
        </div>

    )
}

export default AppPagination