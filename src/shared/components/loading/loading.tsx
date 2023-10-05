import { LoaderContainer, Loader } from "../../../styles/loading"
import { Img } from "../../../styles/booking"

function Loading() {
return (
    <LoaderContainer>
    <Loader src={Img} alt='Loading'/>
    </LoaderContainer>
)
}

export default Loading