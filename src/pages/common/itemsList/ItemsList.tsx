import {Card, CardGroup} from "react-bootstrap";
import {AllItems} from "../../../services/entities/Items";

type ItemsListProps = {
    data: AllItems
}

const ItemsList = ({data}: ItemsListProps) => {
    return (
        <CardGroup className='mt-4'>
            {data?.map(item => {
                return (
                    <Card>
                        <Card.Img variant="top" src={item.images[0].url}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <div className='d-flex justify-content-between'>
                                    <span>{item.locality.municipality}</span>
                                    <span>{item.price} Kč</span>
                                </div>
                            </small>
                        </Card.Footer>
                    </Card>
                )
            })}
        </CardGroup>
    )
}

export default ItemsList