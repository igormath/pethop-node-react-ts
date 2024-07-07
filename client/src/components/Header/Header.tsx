import logo from '../../assets/icons/pata.png';
import userIcon from '../../assets/icons/user-3-svgrepo-com.svg';
import cartIcon from '../../assets/icons/carrinho-de-compras.png';
import './Header.css'
import { FunctionComponent } from 'react';

interface HeaderProps {
    productQuantity?: number;
}

const Header: FunctionComponent<HeaderProps> = ({productQuantity}) => {
  return (
    <header className="header">
        <div className="header__container">
            <img className="header__logo" src={logo} alt="Ícone KI Petshop"/>
            <h1 className="title pseudo__link"><a href="/">KI PetShop</a></h1>
            <div className="header__container-icons">
                <img className="header__profile-icon" src={userIcon} alt="Ícone Perfil"/>
                <img className="header__cart-icon" src={cartIcon} alt="Ícone carrinho de compras"/>
                {productQuantity ? <p className="cart__number">{productQuantity}</p> : <p className="cart__number">0</p>} 
            </div>
        </div>
    </header>
  );
};

export default Header;
