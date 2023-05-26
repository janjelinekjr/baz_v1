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
    const url = `https://aukro.cz/backend-web/api/offers/searchItemsCommon?page=${data.page}&size=${data.size}&sort`
    // const headers = {
    //     "Accept": "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //     "Referer": "https://aukro.cz/vysledky-vyhledavani?gclid=CjwKCAjw3ueiBhBmEiwA4BhspLJrxjIYn7KuJO77MOFRdeN6jKDSXOFPL-JfDry_kocsGk4rqdmLNRoC2NAQAvD_BwE&text=k%C5%99eslo&timestamp=1683619579648",
    //     "sec-ch-ua-platform": "Windows",
    //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    //     "X-Accept-Currency": "CZK",
    //     "X-Accept-Language": "cs",
    //     "x-aukro-client": "platform-frontend",
    //     "X-Aukro-Token": "3c78fe02-cf47-4b1f-b8ac-2be1253ee75a",
    // }
    return axios.post(url, {body})
}