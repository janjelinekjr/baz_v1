import {useForm} from "react-hook-form";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {sbazarGoodsFetch} from "../../../store/slices/goodsSlice";
import {FetchSbazarGoodsInputData} from "../../../services/entities/Goods";
import {useAppDispatch} from "../../../store/store";

const SearchForm = () => {
    const dispatch = useAppDispatch()

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        const payload: FetchSbazarGoodsInputData = {
            offset: 0,
            phrase: data.searchValue,
            limit: 36
        }
        dispatch(sbazarGoodsFetch(payload))
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