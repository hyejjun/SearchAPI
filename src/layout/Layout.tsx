import Styled from 'styled-components'
import * as React from 'react';

interface LayoutI {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutI) => {
    return (
        <LayoutWrap>
            <LayoutInnerWrap>
                {children}
            </LayoutInnerWrap>
        </LayoutWrap>
    )
}

export default Layout


const LayoutWrap = Styled.div`
    width : 100%;

`

const LayoutInnerWrap = Styled.div`
    width : 1200px;
    height : auto;
    margin : 0 auto;
`