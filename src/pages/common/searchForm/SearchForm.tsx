import {useForm} from "react-hook-form";
import {Button, Card, FloatingLabel, Form} from "react-bootstrap";
import {aukroGoodsFetch, clearData, sbazarGoodsFetch, setSearchValue} from "../../../store/slices/goodsSlice";
import {FetchAukroGoodsInputData, FetchSbazarGoodsInputData} from "../../../services/entities/Goods";
import {useAppDispatch} from "../../../store/store";
import clsx from "clsx";
import {Search} from "react-bootstrap-icons";

const SearchForm = () => {
    const {register, watch, handleSubmit} = useForm();
    const numItemsPerBazar = watch('numItemsPerBazar')
    const dispatch = useAppDispatch()

    const onSubmit = (data: any) => {
        dispatch(setSearchValue(data.searchValue))

        if (numItemsPerBazar) {
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
        <Card className={clsx('shadow', 'bg-light', 'rounded-4')}>
            <Card.Body>
                <div className={clsx('d-flex', 'flex-column', 'gap-3', 'p-5')}>
                    <h1 className={clsx('text-center', 'text-primary')}>Nejpoužívanější bazary na jednom místě</h1>
                    <div className={clsx('d-flex', 'justify-content-center', 'mb-5')}>
                        <h6 className={clsx('text-center', 'w-50', 'text-primary')}>Hledejte bazarové zboží najednou ve všech nejznámějších a
                            nejpoužívanějších českých bazarech jako je Aukro, Sbazar, Bazoš a Marketplace</h6>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex flex-column gap-5'>
                            <div className={clsx('d-flex', 'justify-content-center')}>
                                <FloatingLabel
                                    controlId="floatingSearch"
                                    label={<span className={clsx('d-flex', 'gap-2')}><Search
                                        className='align-self-center'/><span>Co hledáte?</span></span>}
                                    className={clsx('w-75')}>
                                    <Form.Control type="text"
                                                  placeholder="Hledané zboží" {...register("searchValue")} />
                                </FloatingLabel>
                            </div>

                            <div className={clsx('d-flex', 'justify-content-center')}>
                                <div className='d-flex gap-4 text-primary'>
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
                            </div>
                            <div className={clsx('d-flex', 'justify-content-center')}>
                                <Button
                                    className={clsx('m-btn', 'text-light', 'd-flex', 'justify-content-center', 'gap-2', 'fw-semibold', 'p-3')}
                                    type='submit'><span>Hledat</span><Search
                                    className={clsx('align-self-center')}/>
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Card.Body>
        </Card>

    );
}

export default SearchForm