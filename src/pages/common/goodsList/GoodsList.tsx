import {Badge, Button, Card, CardGroup, Form} from "react-bootstrap";
import {
    BazarTypeEnum,
    GoodsListType,
    SortEnum
} from "../../../services/entities/Goods";
import {formatAmount, formatDate} from "../../../utils/formatUtils";
import './GoodsList.module.scss'
import sbazarLogo from '../../../devdata/imgs/logos/logo-sbazar.svg'
import bazosLogo from '../../../devdata/imgs/logos/bazos.svg'
import aukroLogo from '../../../devdata/imgs/logos/aukro.svg'
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../../store/store";
import clsx from "clsx";
import styles from './GoodsList.module.scss'
import {BoxArrowUpRight} from "react-bootstrap-icons";

type GoodsListProps = {
    data: GoodsListType,
    indexOfLastItem: number,
    indexOfFirstItem: number
}

const GoodsList = ({data, indexOfFirstItem, indexOfLastItem}: GoodsListProps) => {
    const {register, watch} = useForm({mode: "onChange"});
    const sortValue = watch('sort')
    const dataForSort = data.slice()
    const {totalItemsFound} = useAppSelector(state => state.goods)

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
        <div className={clsx('pb-3')}>
            <div className={clsx('d-flex', 'justify-content-end', 'mt-4')}>
                <div className={clsx('d-flex', 'align-items-center', 'gap-4')}>
                    <Form.Label className={clsx('text-primary', 'mb-0')}>Seřadit:</Form.Label>
                    <Form.Select {...register("sort")}>
                        <option>Vybrat řazení</option>
                        <option value={SortEnum.dateDesc}>Od nejnovějšího</option>
                        <option value={SortEnum.dateAsc}>Od nejstaršího</option>
                        <option value={SortEnum.priceAsc}>Od nejlevnějšího</option>
                        <option value={SortEnum.priceDesc}>Od nejdražšího</option>
                    </Form.Select>
                </div>
            </div>
            <div>
                <Card className={clsx('mt-4', 'bg-light', 'shadow')}>
                    <Card.Body>
                        <p className={clsx('text-primary')}>Celkový počet nalezených položek Sbazar: <span
                            className={clsx(styles.totalItemsSpan)}>{Number(totalItemsFound.sbazar).toLocaleString('cs-CZ')}</span>
                        </p>
                        <p className={clsx('text-primary')}>Celkový počet nalezených položek Aukro: <span
                            className={clsx(styles.totalItemsSpan)}>{Number(totalItemsFound.aukro).toLocaleString('cs-CZ')}</span>
                        </p>
                    </Card.Body>
                </Card>
            </div>
            <CardGroup
                className={clsx('mt-3', 'row', 'row-cols-xxl-4', 'row', 'row-cols-xl-4', 'row', 'row-cols-lg-3', 'row-cols-md-2', 'row-cols-sm-1', 'row-cols-1', 'gx-2', 'gy-3')}>
                {getDataWithSort()?.map(item => {
                    const bazarLogo =
                        item.bazar === BazarTypeEnum.sbazar ?
                            <img className={clsx(styles.sbazarLogo)} src={sbazarLogo} alt='logo'/> :
                            item.bazar === BazarTypeEnum.bazos ?
                                <img className={clsx(styles.bazosLogo)} src={bazosLogo} alt='logo'/> :
                                item.bazar === BazarTypeEnum.aukro ?
                                    <img className={clsx(styles.aukroLogo)} src={aukroLogo} alt='logo'/> : null
                    const priceResult = (item.price === 0 && !item.price_by_agree) ? 'Zdarma' : item.price_by_agree ? 'Dohodou' : formatAmount(item.price)
                    const originUrl: string = item.bazar === BazarTypeEnum.sbazar ? `https://www.sbazar.cz/${item.user}/detail/${item.seo_name}` : item.bazar === BazarTypeEnum.aukro ? `https://www.aukro.cz/${item.seo_name}-${item.id}` : ''

                    return (
                        <div key={item.id} className='col'>
                            <Card className={clsx(styles.cards, 'h-100', 'shadow')}>
                                <Card.Img variant="top" className={clsx(styles.cardsImg)} src={item.titleImg}/>
                                <Card.Body className={clsx('d-flex', 'flex-column', 'justify-content-between')}>
                                    <Card.Title className={clsx('text-primary')}>{item.name}</Card.Title>
                                    <Card.Text>
                                        <div className={clsx('d-flex', 'flex-column', 'gap-3', 'mb-3')}>
                                            <div className={clsx('d-flex', 'justify-content-between', 'mb-2')}>
                                                <span className={clsx('text-primary')}>Přidáno:</span>
                                                <span
                                                    className={clsx('text-primary')}>{formatDate(item.startTime)}</span>
                                            </div>
                                            <div className={clsx('text-center', 'mb-2')}>
                                                <span>{bazarLogo}</span>
                                            </div>
                                            <div className='text-center'>
                                                <Button as={'a'} className={clsx('text-light')} href={originUrl}
                                                        target='_blank'>
                                                    <span
                                                        className={clsx('d-flex', 'gap-2', 'align-items-center')}><span
                                                        className={clsx('mb-0')}>Přejít na inzerát</span> <BoxArrowUpRight
                                                        className={clsx('mb-1')}/></span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={clsx('bg-white')}>
                                    <small className="text-muted">
                                        <div className={clsx('d-flex', 'justify-content-between')}>
                                            <span className={clsx('text-primary', 'fw-semibold', 'align-self-center')}>{item.location.location || item.location.region}</span>
                                            <Badge className={clsx('fw-bold', 'bg-light', 'text-primary', 'd-flex', 'align-items-center', 'pe-3', 'ps-3', 'fs-6', 'shadow-sm')}>{priceResult}</Badge>
                                        </div>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                })}
            </CardGroup>
        </div>
    )
}

export default GoodsList