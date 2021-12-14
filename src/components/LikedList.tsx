import { useSelector } from "react-redux"
import { deleteHtml } from "../hooks/deleteHtml"
import { RootState } from "../app/store"
// import { RootState } from "../reducers"

const LikedList = (props:any) => {
    // const {likeArray} = props

    const likeList = useSelector((state:RootState) => state.reducers.list.likedList);    

    const getLikedList = () => {
        let list = likeList.map((v: any, k: any) => {
            return (
                <>
                    <li key={`${k}`}>
                        <a href={v.url} target="_blank">
                            <span>
                                <img src={v.thumbnail} />
                            </span>
                            <span>
                                {
                                    deleteHtml(v.title)
                                }
                            </span>
                        </a>
                    </li>
                </>
            )
        })
        return list
    }

    return (
        <>
            <div>
                <ul>
                    {
                        getLikedList()
                    }
                </ul>
            </div>
        </>
    )
}

export default LikedList