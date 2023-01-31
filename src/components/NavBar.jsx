import CartWidget from "./CartWidget"


function NavBar(props) {
  return (
    <nav id="navBar">
        <div className="navBar__left">
            <h1 className="navBar__title">Delfos: Store</h1>
        </div>
        <div className="navBar__right">
            <ul id="categoriesLinks">
                <li className="navBar__li"><a className="navBar__link" href="">Juegos</a></li>
                <li className="navBar__li"><a className="navBar__link" href="">Software</a></li>
                <li className="navBar__li"><a className="navBar__link" href="">DelfOS keys</a></li>
                <li className="navBar__li"><a className="navBar__link" href="">Julius Plans</a></li>
            </ul>
            <div id="cartLogo">
                <CartWidget />
            </div>
        </div>
    </nav>
  )
}


export default NavBar
