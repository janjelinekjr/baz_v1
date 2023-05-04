import {Button, ButtonProps, OverlayTrigger, Tooltip} from 'react-bootstrap';
import clsx from 'clsx';
import {useNavigate} from 'react-router-dom';

type ExtraProps = {
    noYMargin?: boolean,
    noXMargin?: boolean,
    to?: string,
    tooltip?: string
}
export function AppButton(props: ButtonProps & ExtraProps) {

    const btnProps = {...props}
    delete btnProps.noYMargin
    delete btnProps.to

    const navigate = useNavigate();

    const handleOnClick = (event: any) => {
        props.onClick && props.onClick(event)
        props.to && navigate(props.to)
    }

    let btn = <Button {...btnProps} onClick={handleOnClick}
                     className={clsx(props.noYMargin || 'my-2' , btnProps.className)} />

    return props.tooltip ?
        <OverlayTrigger placement="auto" overlay={<Tooltip>{props.tooltip}</Tooltip>}>
            {btn}
        </OverlayTrigger> :
        btn
}