import Style from '../Text/Text.module.css'

function Text(props) {
    return (
        <div className={Style.conteiner}>
            <div style={{color: props.changeCol? "#00FFF8":"#FFFFFF"}} className={Style.first}>Equilibrum #3429</div>
            <div className={Style.second}>Our Equilibrum collection promotes<br/> balance and calm</div>
        </div>
    )
}

export default Text;