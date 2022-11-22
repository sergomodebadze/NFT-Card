import Style from '../Person/Person.module.css'
import Img from '../../image/image-avatar.png'

function Person(props) {
    return (
        <div className={Style.conteiner}>
            <div className={Style.line}></div>
            <div className={Style.mainDiv}>
                <img className={Style.image} src={Img} alt="img" />
                <div style={{color: props.changeCol? "#00FFF8" : "#ffff"}} className={Style.name}><span>Creation of</span> Jules Wyvern</div>
            </div>
        </div>
    )
}

export default Person;