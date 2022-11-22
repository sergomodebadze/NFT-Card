import Nft from "./components/NftIcon/Nft";
import Picturee from "./components/NftIconPict/Picture";
import Person from "./components/Person/Person";
import Text from "./components/Text/Text";

function Start (props) {
    return (
        <div>
            <Picturee changeCol={props.changeCol} setChangeCol={props.setChangeCol} />
            <Text changeCol={props.changeCol} />
            <Nft />
            <Person changeCol={props.changeCol} />
        </div>

    )
}

export default Start;