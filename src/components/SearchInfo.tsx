// import Styled from 'styled-components'
import List from './List'
import SearchBar from './SearchBar'
import useInput from '../hooks/useInput';
import { useEffect, useState } from 'react';
import { searchApi } from '../searchApi'

const SearchInfo = () => {
    const [search, onChangeSearch] = useInput('')
    const [content, setContent] = useState<string>('')
    interface ArrEle {
        contents: string,
        datetime: Date,
        title: string,
        url: string
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

    return (
        <>
            <SearchBar search={search} onChangeSearch={onChangeSearch} searchSubmit={searchSubmit} searching={searching} />
            <List data={data} />
        </>
    )
}

export default SearchInfo