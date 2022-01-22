import logo from '../../svg/logo.svg';


export default function Header(){
    const descLogo = "Essa é a logo do blog.";

    return (
        <>
            <header className="flex-space-between">
                <div className="logo">
                    <img src={logo} alt={descLogo}/>
                </div>
                <div className="search">
                    <input tyle="text" name="search" className="input-search"/>
                </div>
                <ul className="menu">
                    <li><a href="#" className="nav-link">Categorias</a> </li>
                    <li><a href="#" className="nav-link">Sobre</a> </li>
                    <li><a href="#" className="nav-link">Contato</a> </li>
                </ul>
            </header>
        </>
    );
}