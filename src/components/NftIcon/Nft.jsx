import Style from '../NftIcon/Nft.module.css'
import Img from '../../image/icon-ethereum.svg'
import Clock from '../../image/icon-clock.svg'

function Nft() {
    return (
        <div className={Style.conteiner}>
            <div className={Style.etheriumDiv}>
                <div><img src={Img} alt="img" /></div>
                <div className={Style.price}>0.041ETH</div>
            </div>
            <div className={Style.etheriumDiv}>
                <div><img src={Clock} alt="img" /></div>
                <div className={Style.time}>3 days left</div>
            </div>
        </div>
    )
}

export default Nft;