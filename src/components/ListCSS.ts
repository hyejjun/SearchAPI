import Styled from "styled-components";

export const ListWrap = Styled.div`
    & > ul > li {
        display : inline-block;
        width : 600px;
        height: 400px;
    }

    & > ul > li > div {
        width: 300px;
        height: 350px;
        margin: 0 auto;
        border : 1px solid #666;
        padding: 25px;
        box-sizing : border-box;
    }

    .thumbnail > img{
        width : 150px;
        height : 150px;
        display: block;
        margin : 0 auto;
        
    }

    .title{
        display: block;
        height: 100px;
    }

    .like{

    }

    .delete{
        cursor : pointer;
        
    }

    .delete > svg {
        float : right;
        width : 50px;
        height : 50px;
    }
`