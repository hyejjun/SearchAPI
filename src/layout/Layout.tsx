import Styled from 'styled-components'
import * as React from 'react';

interface Layout {
    children: React.ReactNode;
    // any other props that come into the component
}

const Layout = ({ children }: Layout)=>{
    return(
        <div>
            {children}
        </div>
    )
}

export default Layout