import './LoadingIndicator.scss'
import clsx from 'clsx';

export type LoadingIndicatorProps = {
    title: string,
    local: boolean
}
export function LoadingIndicator({local, title}: LoadingIndicatorProps) {
    return (
        <div className={clsx('LoadingIndicator', local && 'local')}>
            <div className="position-relative d-flex align-items-center">
                <div className="spinner" />
                <h5 className="title ms-2 mb-0">{title}</h5>
            </div>
        </div>
    );
}
LoadingIndicator.defaultProps = {
    title: "Načítání",
    local: true
}