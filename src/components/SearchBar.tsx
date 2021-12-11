import Styled from 'styled-components'

const SearchBar = ()=>{
    return(
        <>
            <SearchInput type="text" />
            <button>검색</button>
        </>
    )
}

export default SearchBar

const SearchInput = Styled.input`
    
`