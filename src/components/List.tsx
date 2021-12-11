// import Styled from 'styled-components'

const List = (props: any) => {
    const { data } = props

    const getList = () => {
        function deleteHtml(htmlTxt: string) {
            htmlTxt = htmlTxt || '';
            htmlTxt = htmlTxt.replace(/<\/p>/ig, "</p>\n"); // </p> 태그를 </p> + 엔터로 변경
            htmlTxt = htmlTxt.replace(/&nbsp;/ig, " "); // 공백
            htmlTxt = htmlTxt.replace(/<br>/ig, "\n"); // <br>을 엔터로 변경
            htmlTxt = htmlTxt.replace(/&gt;/ig, ">");
            htmlTxt = htmlTxt.replace(/&lt;/ig, "<");
            htmlTxt = htmlTxt.replace(/&#34;/ig, '"');
            htmlTxt = htmlTxt.replace(/&#39;/ig, "'");
            htmlTxt = htmlTxt.replace(/&amp;/ig, '&');


            // HTML 태그제거 정규표현식 사용
            htmlTxt = htmlTxt.replace(/<(\/)?([a-zA-Z0-9]*)(\s[a-zA-Z0-9]*=[^>]*)?(\s)*(\/)?>/ig, "");
            return htmlTxt;
        }

        let list = data.map((v: any, k: any) => {
            return (
                <>
                    <ul key={k}>
                        <li>
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
                        </li>
                    </ul>
                </>
            )
        })
        return list
    }

    return (
        <>
            <div>

                {
                    getList()
                }

            </div>
        </>
    )
}

export default List