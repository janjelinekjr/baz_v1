import {
    FetchAukroGoodsInputBody,
    FetchAukroGoodsInputData, FetchAukroGoodsOutputResult,
    FetchSbazarGoodsInputData,
    FetchSbazarGoodsOutputResult
} from "../entities/Goods";
import axios from "axios";

export const fetchSbazarGoods = (data: FetchSbazarGoodsInputData): Promise<FetchSbazarGoodsOutputResult> => {
    const url = `http://localhost:3000/items/search?offset=${data.offset}&sort=-create_date&phrase=${data.phrase}&limit=${data.limit}`
    return axios.get(url)
}

export const fetchAukroGoods = (data: FetchAukroGoodsInputData, body: FetchAukroGoodsInputBody): Promise<FetchAukroGoodsOutputResult> => {
    const url = `http://localhost:3000/offers/searchItemsCommon?page=${data.page}&size=${data.size}&sort`
    return axios.post(url, {body})
}