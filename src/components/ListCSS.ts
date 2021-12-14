import Styled from "styled-components";

export const ListWrap = Styled.div`
    width: 1200px;
    display: flex;
    & > ul > li {
        float: left;
        width : 600px;
        height: 450px;
    }

    & > ul > li > div {
        width: 300px;
        height: 400px;
        margin: 0 auto;
        border: 1px solid #666;
        padding: 30px;
        box-sizing: border-box;
    }

    .thumbnail{
        display: block;
        height: 200px;
    }

    .thumbnail > img{
        width: 175px;
        height: 170px;
        display: block;
        margin : 0 auto;
        
    }

    .title{
        display: block;
        height: 95px;
        text-align :center;
        font-size : 17px;
        color : black;
    }

    .like{

    }

    .delete,
    .like {
        cursor : pointer;
    }

    .delete > svg,
    .like > svg {
        float : right;
        width : 50px;
        height : 45px;
    }
`