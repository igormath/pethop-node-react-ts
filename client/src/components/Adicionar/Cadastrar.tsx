import { useRef, useState } from "react";
import postProducts from "../../services/postProducts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Cadastrar.css'

const Cadastrar = () => {
    const nameInput = useRef<HTMLInputElement>(null);
    const priceInput = useRef<HTMLInputElement>(null);
    const [isProductCreated, setIsProductDeleted] = useState<boolean>(false);

    const handleCreateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (nameInput.current?.value && priceInput.current?.value){
            const response = await postProducts(nameInput.current.value, parseFloat(priceInput.current.value));
            if (response.ok){
                setIsProductDeleted(true);
            }
        }
    }

    return (
    <>
        <Header/>
        <main className="main__add">
        <h3 className="add__subtitle">Cadastre novos produtos: </h3>
        <form id="product-add" onSubmit={handleCreateSubmit}>
            <label htmlFor="product-name" className="add__label">Nome do Item:</label>
            <input ref={nameInput} type="text" id="product-name" className="input__name" name="product-name" placeholder="Digite o nome do item" required/>
            <label htmlFor="product-price" className="add__label">Preço do Item:</label>
            <input ref={priceInput} type="text" id="product-price" className="input__price" name="product-price" placeholder="Digite o preço do item" required/>
            <button type="submit" className="submit__btn">Cadastrar</button>
        </form>
        {isProductCreated && <h3 className="remove__success add_status">Produto cadastrado com sucesso!</h3>}
        </main>
        <Footer/>
    </>
    )
}

export default Cadastrar;
