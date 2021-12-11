import Styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props:any) => {
    

    const {search, onChangeSearch,searchSubmit,searching } = props

    return (
        <>
            <SearchWrap>
                <SearchInput type="text" value={search} onChange={onChangeSearch} />
                <SearchIconWrap onClick={searchSubmit}>
                    {searching ? '검색 중..' : <SearchIcon />}
                </SearchIconWrap>
            </SearchWrap>
        </>
    )
}

export default SearchBar

const SearchWrap = Styled.div`
    width : 550px;
    height : auto;
    margin : 0 auto;
    display : flex;
`

const SearchInput = Styled.input`
    width: 440px;
    height: 24px;
    padding: 13px 15px;
    margin: 1px;
    background-color: #fff;
    font-size: 18px;
    line-height: 24px;
    color: #000;
    font-weight: 700;
    outline: 0;
`

const SearchIconWrap = Styled.span`
    width: 55px;
    height: 50px;
    background: white;
    margin: 1px;
    outline: 0;
    border: 2px solid #000;
    & > svg {
        width: 100%;
        height: 48px;
        padding: 5px 4px 2px 8px;
        box-sizing: border-box;
        cursor: pointer;
    }
`