import {useForm} from "react-hook-form";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {aukroGoodsFetch, clearData, sbazarGoodsFetch, setSearchValue} from "../../../store/slices/goodsSlice";
import {FetchAukroGoodsInputData, FetchSbazarGoodsInputData} from "../../../services/entities/Goods";
import {useAppDispatch} from "../../../store/store";

const SearchForm = () => {
    const {register, watch, handleSubmit} = useForm();
    const numItemsPerBazar = watch('numItemsPerBazar')
    const dispatch = useAppDispatch()

    const onSubmit = (data: any) => {
        dispatch(setSearchValue(data.searchValue))

        if(numItemsPerBazar) {
            dispatch(clearData())
        }

        const payloadSbazar: FetchSbazarGoodsInputData = {
            offset: 0,
            phrase: data.searchValue,
            limit: Number(numItemsPerBazar) || 100
        }
        dispatch(sbazarGoodsFetch(payloadSbazar))

        const payloadAukro: FetchAukroGoodsInputData = {
            page: 1,
            size: Number(numItemsPerBazar) || 100,
            text: data.searchValue
        }
        dispatch(aukroGoodsFetch(payloadAukro))
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex flex-column gap-4'>
                <FloatingLabel controlId="floatingSearch" label="Hledané zboží">
                    <Form.Control type="text" placeholder="Hledané zboží" {...register("searchValue")} />
                </FloatingLabel>
                <div className='d-flex gap-4 align-items-center w-50'>
                    <Form.Label>Počet položek/bazar:</Form.Label>
                    <Form.Check
                        {...register("numItemsPerBazar")}
                        inline
                        label="50"
                        value={50}
                        type={"radio"}
                        id={`50`}
                    />
                    <Form.Check
                        {...register("numItemsPerBazar")}
                        inline
                        defaultChecked
                        label="100"
                        value={100}
                        type={"radio"}
                        id={`100`}
                    />
                    <Form.Check
                        {...register("numItemsPerBazar")}
                        inline
                        label="150"
                        value={150}
                        type={"radio"}
                        id={`150`}
                    />
                    <Form.Check
                        {...register("numItemsPerBazar")}
                        inline
                        label="200"
                        value={200}
                        type={"radio"}
                        id={`200`}
                    />
                </div>
                <div className='text-center'>
                    <Button className='m-btn' type='submit'>Hledat</Button>
                </div>
            </div>
        </Form>
    );
}

export default SearchForm