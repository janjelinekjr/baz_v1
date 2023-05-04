import {useForm} from "react-hook-form";
import {Button, FloatingLabel, Form} from "react-bootstrap";

const SearchForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => console.log(data);

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