/** @jsx jsx */
import { jsx } from '@emotion/core'
import Logo from "../../assets/images/logo.svg";
import { container,image }from "./Header.styles"

function Header({rightElement}) {
    return(
        <div css={container}>
            <div css={image}>
                <img src={Logo} alt="logo listez app" loading="lazy"></img>
            </div>
            {rightElement}
        </div>
    )
}

export default Header