import { useSelector } from "react-redux"
import { deleteHtml } from "../hooks/deleteHtml"
import { RootState } from "../app/store"
import Styled from "styled-components"
import { ListWrap } from "./ListCSS"
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

const LikedList = (props: any) => {
    const { deleteFromLikelist } = props

    const likeList = useSelector((state: RootState) => state.reducers.list.likedList);

    const getLikedList = () => {
        let list = likeList.map((v: any, k: number) => {
            return (

                <li key={`${k}`}>
                    <div>
                        <a href={v.url} target="_blank" rel="noreferrer">
                            <span className="thumbnail">
                                <img src={v.thumbnail} alt="thumbnail" />
                            </span>
                            <span className="title">
                                {
                                    deleteHtml(v.title)
                                }
                            </span>
                        </a>
                        <span className="delete" onClick={() => { deleteFromLikelist(v.url) }}>
                            <BookmarkRemoveIcon />
                        </span>
                    </div>
                </li>

            )
        })
        return list
    }

    return (
        <>
            <ListWrap>
                <ul>
                    {
                        getLikedList()
                    }
                </ul>
            </ListWrap>
        </>
    )
}

export default LikedList