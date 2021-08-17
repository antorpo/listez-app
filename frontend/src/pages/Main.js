import React from "react"
import Header from "../components/Header"
import LoginButton from "../components/LoginButton/LoginButton"
import FirstSection from "../modules/Main/FirstSection/FirstSection"
import SecondSection from "../modules/Main/SecondSection/SecondSection"

function Main() {
    return(
        <div>
            <Header rightElement={<LoginButton/>}></Header>
            <FirstSection/>
            <SecondSection/>
        </div>
    )
}
export default Main