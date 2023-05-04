import {combineReducers, configureStore} from "@reduxjs/toolkit";
import goodsSlice, {GoodsState} from "./slices/goodsSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: combineReducers({
        goods: goodsSlice
    })
})

export type RootState = {
    goods: GoodsState
}

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector