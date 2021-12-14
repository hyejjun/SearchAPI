import Styled from 'styled-components'
import { deleteHtml } from "../hooks/deleteHtml"
import { ListWrap } from './ListCSS'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const SearchedList = (props: any) => {
    const { data, clickedLike } = props

    const getList = () => {
        let list = data.map((v: any, k: number) => {
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
                        <span className="like" key={`like_${k}`} onClick={() => { clickedLike(v.title, v.thumbnail, v.url) }}>
                            좋아용
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
                        getList()
                    }
                </ul>
            </ListWrap>
        </>
    )
}

export default SearchedList

