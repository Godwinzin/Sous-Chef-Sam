import Logo from "../assets/logo.png"
export default function Header(){
    return(
        <header>
            <div className="logo-container" >
                <img src={Logo} alt="logo" className="logo"/>
                <span className="logo-name">
                    <span className="text-red">
                        Sous
                    </span>-Chef Sam</span>
            </div>
        </header>
    )
}