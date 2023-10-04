import { LoaderContainer, Loader } from "../../../styles/loading"
import { loadingImg } from "./loadingImg.png"

function Loading() {
return (
    <LoaderContainer>
    <Loader src={loadingImg} alt='Loading'/>
    </LoaderContainer>
)
}

export default Loading