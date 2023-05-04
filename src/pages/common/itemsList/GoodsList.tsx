import {Card, CardGroup} from "react-bootstrap";
import {BazarTypeEnum, GoodsListType} from "../../../services/entities/Goods";
import {formatAmount, formatDate} from "../../../utils/formatUtils";
import './GoodsList.scss'
import sbazarLogo from '../../../devdata/imgs/logos/logo-sbazar.svg'
import bazosLogo from '../../../devdata/imgs/logos/bazos.svg'
import aukroLogo from '../../../devdata/imgs/logos/aukro.svg'

type GoodsListProps = {
    data: GoodsListType
}

const GoodsList = ({data}: GoodsListProps) => {
    return (
        <CardGroup
            className='mt-4 row row-cols-xxl-4 row row-cols-xl-4 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gx-2 gy-3'>
            {data?.map(item => {
                const bazarLogo =
                    item.bazar === BazarTypeEnum.sbazar ? <img className='sbazar-logo' src={sbazarLogo} alt='logo'/> :
                        item.bazar === BazarTypeEnum.bazos ? <img className='bazos-logo' src={bazosLogo} alt='logo'/> :
                            item.bazar === BazarTypeEnum.aukro ?
                                <img className='aukro-logo' src={aukroLogo} alt='logo'/> : null
                const priceResult = (item.price === 0 && !item.price_by_agree) ? 'Zdarma' : item.price_by_agree ? 'Dohodou' : formatAmount(item.price)

                return (
                    <div className='col'>
                        <Card className='card'>
                            <Card.Img variant="top" src={''}/>
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
                                           href={`https://www.sbazar.cz/${item.user}/detail/${item.seo_name}`}
                                           target="_blank">
                                            Přejít na inzerát
                                        </a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <div className='d-flex justify-content-between'>
                                        <span>{item.location.location}</span>
                                        <span className='fw-bold'>{priceResult}</span>
                                    </div>
                                </small>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            })}
        </CardGroup>
    )
}

export default GoodsList