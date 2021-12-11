// import Styled from 'styled-components'

const List = (props: any) => {
    const { data } = props

    const getList = ()=>{
        let list = data.map((v: any, k: any) => {
            return (
                <>
                    <ul key={k}>
                        <li>
                            <a href={v.url}>
                                {v.title}
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