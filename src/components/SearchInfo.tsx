import Styled from 'styled-components'
import SearchedList from './SearchedList'
import SearchBar from './SearchBar'
import useInput from '../hooks/useInput';
import { useState, KeyboardEvent  } from 'react';
import { searchApi } from '../searchApi'
import LikedList from './LikedList';
import { likeList, deleteLikeList } from '../reducers/list';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../app/store"

const SearchInfo = () => {
    const dispatch = useDispatch()

    const [search, onChangeSearch] = useInput('')
    interface ArrEle {
        contents: string,
        datetime: Date,
        title: string,
        url: string,
        blogname: string,
        thumbnail: string
    }
    const [data, setData] = useState<ArrEle[]>([])

    const [searching, setSearching] = useState<Boolean>(false)

    const searchSubmit = () => {
        if (search !== '') {
            setSearching(true)

            searchApi(search)
                .then((res) => {
                    setData(res)
                })
                .catch((err) => {
                    alert('검색 결과를 찾아오지 못했습니다.');
                });
            setSearching(false)
            setListType(false)
        }
    }
    const onKeyPress = (e:KeyboardEvent<HTMLImageElement>) =>{
        if(e.key == "Enter"){
            searchSubmit()
        }
    }

    const [listType, setListType] = useState<Boolean>(false)

    const selectSearchedList = () => {
        setListType(false)
    }

    const selectLikedList = () => {
        setListType(true)
    }

    const likedList = useSelector((state:RootState) => state.reducers.list.likedList)  

    const clickedLike = (title:string, thumbnail:string, url:string)=>{
        let likeContent = {
            url,
            title,
            thumbnail
        }
        let list = [...likedList]

        list.push(likeContent)

        dispatch(likeList(list))
    }
    
    const deleteFromLikelist = (url:string) =>{
         // 좋아요 취소하기
        const findItem = likedList.find(function(item){
            return item.url === `${url}`
        });
        const idx = likedList.indexOf(findItem);
        likedList.splice(idx,1)

        let updatedLikeList = [...likedList]  
        
        
        dispatch(deleteLikeList(updatedLikeList))
    }


    return (
        <>
            <SearchBar search={search} onChangeSearch={onChangeSearch} searchSubmit={searchSubmit} searching={searching} onKeyPress={onKeyPress}/>
            <SelectType>
                <li onClick={selectSearchedList}>
                    전체
                </li>
                <li onClick={selectLikedList}>
                    저장한 곳
                </li>
            </SelectType>
            {
                listType
                    ? <LikedList  deleteFromLikelist={deleteFromLikelist}/>
                    : <SearchedList data={data} clickedLike={clickedLike} />
            }

        </>
    )
}

export default SearchInfo



const SelectType = Styled.ul`
    display : flex;
    height: 100px;
    padding: 3% 0;
    box-sizing: border-box;
    cursor : default;

    & > li {
        width: 50%;
        text-align: center;
        cursor : pointer;
    }
`