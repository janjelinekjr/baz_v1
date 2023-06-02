import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    AukroResultItem,
    FetchAukroGoodsInputData,
    FetchSbazarGoodsInputData,
    Goods,
    GoodsListType,
    SbazarResultItem
} from "../../services/entities/Goods";
import {fetchAukroGoods, fetchSbazarGoods} from "../../services/api/goodsApi";

export type GoodsState = {
    data: GoodsListType
    pending: boolean
}

const initialState: GoodsState = {
    data: [],
    pending: false
}

export const sbazarGoodsFetch = createAsyncThunk<any, FetchSbazarGoodsInputData>('goods/sbazarGoodsFetch', async (input: FetchSbazarGoodsInputData) => {
    return await fetchSbazarGoods(input)
})

export const aukroGoodsFetch = createAsyncThunk<any, FetchAukroGoodsInputData> ('goods/aukroGoodsFetch', async (input: FetchAukroGoodsInputData) => {
    const body = {
        fallbackItemsCount: 12,
        splitGroupKey: "search",
        splitGroupValue: null,
        text: input.text
    }

    return await fetchAukroGoods(input, body)
})

const goodsSlice = createSlice({
    name: 'goods',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sbazarGoodsFetch.pending, (state) => {
            state.pending = true
        })
        builder.addCase(sbazarGoodsFetch.fulfilled, (state, action) => {
            state.pending = false
            const newItems: GoodsListType = action.payload.data?.results?.map((item: SbazarResultItem) => {
                return {
                    id: item.id,
                    name: item.name,
                    startTime: item.create_date,
                    auction: false,
                    price: item.price,
                    titleImg: item.images[0]?.url,
                    location: {
                        location: item.locality.municipality,
                        region: item.locality.region
                    },
                    bazar: 'sbazar',
                    user: item.user.user_service.shop_url,
                    seo_name: item.seo_name,
                    price_by_agree: item.price_by_agreement
                }
            })
            newItems.map((item: Goods) => state.data.push(item))
        })
        builder.addCase(sbazarGoodsFetch.rejected, (state) => {
            state.pending = false
        })

        builder.addCase(aukroGoodsFetch.pending, (state) => {
            state.pending = true
        })
        builder.addCase(aukroGoodsFetch.fulfilled, (state, action) => {
            state.pending = false
            const newItems: GoodsListType = action.payload.data?.content?.map((item: AukroResultItem) => {
                return {
                    id: item.itemId,
                    name: item.itemName,
                    startTime: item.startingTime,
                    auction: false,
                    price: item.price.amount,
                    titleImg: item.titleImageUrl,
                    location: {
                        location: item.location,
                        region: item.locationRegion?.cityName
                    },
                    bazar: 'aukro',
                    seo_name: item.seoUrl
                }
            })
            newItems.map((item: Goods) => state.data.push(item))
        })
        builder.addCase(aukroGoodsFetch.rejected, (state) => {
            state.pending = false
        })
    }
})

export default goodsSlice.reducer