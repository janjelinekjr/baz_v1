import {FetchSbazarGoodsInputData, FetchSbazarGoodsOutputResult} from "../entities/Goods";
import axios from "axios";

export const fetchSbazarGoods = (data: FetchSbazarGoodsInputData): Promise<FetchSbazarGoodsOutputResult> => {
    const url = `https://www.sbazar.cz/api/v1/items/search?offset=${data.offset}&sort=-create_date&phrase=${data.phrase}&limit=${data.limit}`
    return axios.get(url)
}