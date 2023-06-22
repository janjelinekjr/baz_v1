import {Search, Shop, HourglassSplit} from "react-bootstrap-icons";
import clsx from "clsx";
import styles from './FeaturesSection.module.scss'

function FeaturesSection() {
    return (
        <div className={'pb-5'}>
            <div className={clsx('d-flex', 'mt-5', 'justify-content-center', 'gap-5', styles.underlinePrimary, 'pb-3')}>
                <div className={clsx(styles.featuresDiv, 'text-center')}>
                    <div className={clsx('d-flex', 'justify-content-center')}>
                        <div className={clsx(styles.iconsBgCircle)}>
                            <Search size={25}/>
                        </div>
                    </div>

                    <h6 className={clsx('text-primary', 'fw-bold')}>Jednoduše vyhledávejte</h6>
                    <p className={clsx('text-primary')}>Napište co hledáte, vyberte počet položek z každého bazaru a
                        hledejte pohodlně a jednoduše v těch nejznámějších a nejpoužívanějších bazarech v ČR na jednom
                        místě.</p>
                </div>

                <div className={clsx(styles.featuresDiv, 'text-center')}>
                    <div className={clsx('d-flex', 'justify-content-center')}>
                        <div className={styles.iconsBgCircle}>
                            <HourglassSplit size={25}/>
                        </div>
                    </div>
                    <h6 className={clsx('text-primary', 'fw-bold')}>Rychle k těm nejlepší kouskům</h6>
                    <p className={clsx('text-primary')}>Vyhledané položky ze všech bazarů jednoduše seřaďte dle
                        libovolných
                        preferencí a zjednodušte si tak procházení a výběr těch nejlepších kousků právě pro Vás.</p>
                </div>

                <div className={clsx(styles.featuresDiv, 'text-center')}>
                    <div className={clsx('d-flex', 'justify-content-center')}>
                        <div className={styles.iconsBgCircle}>
                            <Shop size={25}/>
                        </div>
                    </div>
                    <h6 className={clsx('text-primary', 'fw-bold')}>Snadný přechod k obchodu</h6>
                    <p className={clsx('text-primary')}>Při procházení vyhledaných položek jednoduše otevřete detail
                        inzerátu daného zboží v novém okně, můžete tak rovnou přejít k obchodu, případně pokračovat v
                        procházení.</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection