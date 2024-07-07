import { useEffect, useRef, useState } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { getProducts } from "../../services/getProducts"
import deleteProduct from "../../services/deleteProducts"
import './Remover.css'

interface Product {
    id: number,
    name: string,
    price: number,
}

const Remover = () => {
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
    },[])

    const [products, setProducts] = useState<Product[]>([]);
    const [isProductDeleted, setIsProductDeleted] = useState<boolean>(false);
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleDeleteProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectRef.current?.value){
            const selectedIdNumber = parseInt(selectRef.current.value);
            const resDeleteProduct = await deleteProduct(selectedIdNumber);
            if (resDeleteProduct.ok){
                setProducts(p => p.filter(products => products.id !== selectedIdNumber));
                setIsProductDeleted(true);
            }
        }
    }


    return (
    <>
    <Header/>
    <main className="main__remove">
        <form id="product-remove" onSubmit={handleDeleteProduct}>
            <label htmlFor="products" className="remove__label">Selecione um produto para remover:</label>
            <select ref={selectRef} id="products" name="products" className="select__products">
                {products.map(product => 
                    <option
                    key={product.id}
                    value={product.id}
                    className="remove__option">
                        { product.name }
                    </option>
                )}
            </select>
            <button type="submit" className="submit__btn">Remover</button>
        </form>
        {isProductDeleted && <p className="remove__success">Produto removido com sucesso!</p>}
    </main>
    <Footer/>
    </>
    )
}

export default Remover
