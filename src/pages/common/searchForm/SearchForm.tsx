import {useForm} from "react-hook-form";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {aukroGoodsFetch, sbazarGoodsFetch} from "../../../store/slices/goodsSlice";
import {FetchAukroGoodsInputData, FetchSbazarGoodsInputData} from "../../../services/entities/Goods";
import {useAppDispatch} from "../../../store/store";

const SearchForm = () => {
    const dispatch = useAppDispatch()

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        const payloadSbazar: FetchSbazarGoodsInputData = {
            offset: 0,
            phrase: data.searchValue,
            limit: 36
        }
        dispatch(sbazarGoodsFetch(payloadSbazar))

        // const payloadAukro: FetchAukroGoodsInputData = {
        //     page: 1,
        //     size: 60,
        //     text: data.searchValue
        // }
        // dispatch(aukroGoodsFetch(payloadAukro))
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex flex-column gap-4'>
                <FloatingLabel controlId="floatingSearch" label="Hledané zboží">
                    <Form.Control type="text" placeholder="Hledané zboží" {...register("searchValue")} />
                </FloatingLabel>
                <div className='text-center'>
                    <Button className='m-btn' type='submit'>Hledat</Button>
                </div>
            </div>
        </Form>
    );
}

export default SearchForm