import {Card, CardGroup, Form} from "react-bootstrap";
import {BazarTypeEnum, GoodsListType, SortEnum} from "../../../services/entities/Goods";
import {formatAmount, formatDate} from "../../../utils/formatUtils";
import './GoodsList.scss'
import sbazarLogo from '../../../devdata/imgs/logos/logo-sbazar.svg'
import bazosLogo from '../../../devdata/imgs/logos/bazos.svg'
import aukroLogo from '../../../devdata/imgs/logos/aukro.svg'
import {useForm} from "react-hook-form";

type GoodsListProps = {
    data: GoodsListType,
    indexOfLastItem: number,
    indexOfFirstItem: number
}

const GoodsList = ({data, indexOfFirstItem, indexOfLastItem}: GoodsListProps) => {
    const {register, watch} = useForm({mode: "onChange"});
    const sortValue = watch('sort')
    const dataForSort = data.slice()

    const getDataWithSort = () => {
        switch (sortValue) {
            case SortEnum.dateAsc:
                return dataForSort?.sort((date1, date2) => (Number(new Date(date1.startTime)) - Number(new Date(date2.startTime)))).slice(indexOfFirstItem, indexOfLastItem)
            case SortEnum.dateDesc:
                return dataForSort?.sort((date1, date2) => (Number(new Date(date2.startTime)) - Number(new Date(date1.startTime)))).slice(indexOfFirstItem, indexOfLastItem)
            case SortEnum.priceAsc:
                return dataForSort.sort((price1, price2) => price1.price - price2.price).slice(indexOfFirstItem, indexOfLastItem)
            case SortEnum.priceDesc:
                return dataForSort.sort((price1, price2) => price2.price - price1.price).slice(indexOfFirstItem, indexOfLastItem)
            default:
                return dataForSort.slice(indexOfFirstItem, indexOfLastItem)
        }
    }

    return (
        <>
            <div className='d-flex gap-4 align-items-center justify-content-end mt-4'>
                <Form.Label>Seřadit:</Form.Label>
                <div>
                    <Form.Select {...register("sort")}>
                        <option>Vybrat řazení</option>
                        <option value={SortEnum.dateDesc}>Od nejnovějšího</option>
                        <option value={SortEnum.dateAsc}>Od nejstaršího</option>
                        <option value={SortEnum.priceAsc}>Od nejlevnějšího</option>
                        <option value={SortEnum.priceDesc}>Od nejdražšího</option>
                    </Form.Select>
                </div>
            </div>
            <CardGroup
                className='mt-3 row row-cols-xxl-4 row row-cols-xl-4 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gx-2 gy-3'>
                {getDataWithSort()?.map(item => {
                    const bazarLogo =
                        item.bazar === BazarTypeEnum.sbazar ?
                            <img className='sbazar-logo' src={sbazarLogo} alt='logo'/> :
                            item.bazar === BazarTypeEnum.bazos ?
                                <img className='bazos-logo' src={bazosLogo} alt='logo'/> :
                                item.bazar === BazarTypeEnum.aukro ?
                                    <img className='aukro-logo' src={aukroLogo} alt='logo'/> : null
                    const priceResult = (item.price === 0 && !item.price_by_agree) ? 'Zdarma' : item.price_by_agree ? 'Dohodou' : formatAmount(item.price)
                    const originUrl: string = item.bazar === BazarTypeEnum.sbazar ? `https://www.sbazar.cz/${item.user}/detail/${item.seo_name}` : item.bazar === BazarTypeEnum.aukro ? `https://www.aukro.cz/${item.seo_name}-${item.id}` : ''

                    return (
                        <div key={item.id} className='col'>
                            <Card className='card h-100'>
                                <Card.Img variant="top" className='cards-img' src={item.titleImg}/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <span>Přidáno:</span>
                                            <span>{formatDate(item.startTime)}</span>
                                        </div>
                                        <div className='text-center mb-2'>
                                            <span>{bazarLogo}</span>
                                        </div>
                                        <div className='text-center'>
                                            <a className='transfer-link'
                                               href={originUrl}
                                               target="_blank">
                                                Přejít na inzerát
                                            </a>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <div className='d-flex justify-content-between'>
                                            <span>{item.location.location || item.location.region}</span>
                                            <span className='fw-bold'>{priceResult}</span>
                                        </div>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                })}
            </CardGroup>
        </>
    )
}

export default GoodsList