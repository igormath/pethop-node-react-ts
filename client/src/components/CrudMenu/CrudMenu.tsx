import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './CrudMenu.css'

const CrudMenu = () => {
  return (
    <>
        <Header/>
        <main className="menu">
        <h2 className="menu__crud__subtitle">Escolha qual operação deseja realizar: </h2>
        <ul className="menu-nav__list crud__menu">
            <li className="menu-nav__item"><a className="menu-nav__link crud-menu-item" href="/cadastrar">Cadastrar</a></li>
            <li className="menu-nav__item"><a className="menu-nav__link crud-menu-item" href="/atualizar">Atualizar</a></li>
            <li className="menu-nav__item"><a className="menu-nav__link crud-menu-item" href="/remover">Remover</a></li>
        </ul>
        </main>
        <Footer/>
    </>
  )
}

export default CrudMenu;
