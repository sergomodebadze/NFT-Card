import Style from './Picture.module.css'
import Img from '../../image/image.jpg'

function Picturee(props) {
    function change() {
        props.setChangeCol(!props.changeCol)
    }
    return (
        <div className={Style.conteiner}>
            <img onClick={change} className={Style.image} src={Img} alt="img" />
        </div>
    )
}

export default Picturee;