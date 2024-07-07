import pixIcon from '../../assets/icons/icons8-foto-96.png'
import cartaoIcon from '../../assets/icons/icons8-cartão-96.png'
import boletoIcon from '../../assets/icons/icons8-boleto-64.png'
import whatsappIcon from '../../assets/icons/icons8-whatsapp-96.png'
import instagramIcon from '../../assets/icons/icons8-instagram-96.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <nav className="footer__nav">
      <h3 className="footer__subtitle">Mapa do site</h3>
      <ul className="footer__nav-list">
        <li className="footer__nav-item footer__nav-link">Sobre</li>
        <li className="footer__nav-item footer__nav-link">Central de atendimento</li>
        <li className="footer__nav-item footer__nav-link">FAQ</li>
        <li className="footer__nav-item footer__nav-link pseudo__link"><a href="/crud-menu" className='footer__link'>CRUD</a></li>
      </ul>
    </nav>
    <div className="footer__payments">
      <h3 className="footer__subtitle">Formas de Pagamento</h3>
      <ul className="footer__payment-list">
        <li className="footer__payment-item"><img className="footer__payment-icon" src={pixIcon} alt="Ícone pix"/></li>
        <li className="footer__payment-item"><img className="footer__payment-icon" src={cartaoIcon} alt="Ícone cartão"/></li>
        <li className="footer__payment-item"><img className="footer__payment-icon" src={boletoIcon} alt="Ícone boleto"/></li>
      </ul>
    </div>
    <div className="footer__socials">
      <h3 className="footer__subtitle">Redes Sociais</h3>
      <ul className="footer__social-list">
        <li className="footer__social-item"><img className="footer__social-icon" src={whatsappIcon} alt="Ícone WhatsApp"/></li>
        <li className="footer__social-item"><img className="footer__social-icon" src={instagramIcon} alt="Ícone Instagram"/></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer;
