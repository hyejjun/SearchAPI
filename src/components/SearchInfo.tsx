import Styled from 'styled-components'
import SearchedList from './SearchedList'
import SearchBar from './SearchBar'
import useInput from '../hooks/useInput';
import { useEffect, useState } from 'react';
import { searchApi } from '../searchApi'
import LikedList from './LikedList';
import { likeList } from '../reducers/list';
import { useDispatch } from 'react-redux';

const SearchInfo = () => {
    const dispatch = useDispatch()

    const [search, onChangeSearch] = useInput('')
    const [content, setContent] = useState<string>('')
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
            setSearching(true);

            searchApi(search)
                .then((res) => {
                    setData(res)
                })
                .catch((err) => {
                    alert('검색 결과를 찾아오지 못했습니다.');
                });
            setSearching(false);
        }
    }

    const [listType, setListType] = useState<Boolean>(false)

    const selectSearchedList = () => {
        setListType(false)
    }

    const selectLikedList = () => {
        setListType(true)
    }


    interface likeArrEle {
        // title: string,
        url: string,
        // findItem : Object
    }
    const [likeArray, setLikeArray] = useState<likeArrEle[]>([])

    const clickedLike = (title:string, thumbnail:string, url:string)=>{
        console.log(title, thumbnail);
        let likeState = {
            url,
            title,
            thumbnail
        }

        likeArray.push(likeState)



        dispatch(likeList(likeArray));


        // 좋아요 취소하기
        // persist 되어야 함 - 새로 고침 후 상태유지
        const findItem = likeArray.find(function(item){
            return item.url === `${url}`
        });

        console.log(findItem);
        
        // const idx = likeArray.indexOf(findItem);
        // likeArray.splice(idx,1)


        // likeArray.push(likeState)

        console.log(likeArray);
        

    }
    

    return (
        <>
            <SearchBar search={search} onChangeSearch={onChangeSearch} searchSubmit={searchSubmit} searching={searching} />
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
                    ? <LikedList likeArray={likeArray}/>
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