import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { getProducts } from "../../services/getProducts";
import './Atualizar.css'
import putProduct from "../../services/putProducts";

interface Product {
    id: number,
    name: string,
    price: number,
}

const Atualizar = () => {
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
            } catch (error) {
                alert(`Ocorreu um erro ao carregar os produtos! ${error}`);
            }
        }

        fetchProducts();
    }, [])

    const [products, setProducts] = useState<Product[]>([]);
    const [isProductUpdated, setIsProductUpdated] = useState<boolean>(false);
    const selectRef = useRef<HTMLSelectElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const priceInput = useRef<HTMLInputElement>(null);

    const handleSelectChange = () => {
        if (selectRef.current?.value) {
            const numberId = parseInt(selectRef.current.value);
            const selectedProductIndex = products.findIndex(product => product.id === numberId);
            const selectedProduct = products[selectedProductIndex];
            if (nameInput.current && priceInput.current){
                nameInput.current.value = selectedProduct.name;
                priceInput.current.value = selectedProduct.price.toString();
            }
        }
    };

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectRef.current?.value && nameInput.current?.value && priceInput.current?.value){
            const selectedIdNumber = parseInt(selectRef.current.value)
            const floatPrice = parseFloat(priceInput.current.value);
            const response = await putProduct(selectedIdNumber, nameInput.current.value, floatPrice);
            if (response.ok){
                const selectedProductIndex = products.findIndex(product => product.id === selectedIdNumber);
                let newProducts = [...products];
                newProducts[selectedProductIndex].name = nameInput.current.value;
                newProducts[selectedProductIndex].price = floatPrice;
                setProducts(newProducts);
                setIsProductUpdated(true);
            }
        }

    }

    return (
    <>
        <Header/>
        <main className="main__att">
        <form id="product-att" onSubmit={handleUpdateSubmit}>
        <label htmlFor="products" className="label__att first">Selecione um produto para atualizar:</label>
        <select ref={selectRef} id="products" name="products" className="select__products" onChange={handleSelectChange}>
        {products.map(product => (
            <option 
            key={product.id}
            value={product.id}
            className="att__option">    
                {product.name}
            </option>
        ))}
        </select>
        <label htmlFor="product-name" className="label__att">Nome do Item:</label>
        <input ref={nameInput} type="text" id="product-name" className="input__name" name="product-name" placeholder="Digite o nome do item" required />
        <label htmlFor="product-price" className="label__att">Preço do Item:</label>
        <input ref={priceInput} type="text" id="product-price" className="input__price" name="product-price" placeholder="Digite o preço do item" required />
        <button type="submit" className="submit__btn">Atualizar</button>
        </form>
        {isProductUpdated && <p className="remove__success">Produto atualizado com sucesso!</p>}
        </main>
        <Footer/>
    </>
    )
}

export default Atualizar;
