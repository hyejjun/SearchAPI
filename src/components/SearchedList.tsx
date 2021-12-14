// import Styled from 'styled-components'
import { deleteHtml } from "../hooks/deleteHtml"

const SearchedList = (props: any) => {
    const { data, clickedLike } = props

    const getList = () => {
        let list = data.map((v: any, k: any) => {
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
                        <span key={`like_${k}`} onClick={() => { clickedLike(v.title,v.thumbnail,v.url) }}>
                            좋아용
                        </span>
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
                        getList()
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchedList