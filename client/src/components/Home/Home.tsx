import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import ProductCard from "../ProductCard/ProductCard";
import './Home.css'
import { getProducts } from "../../services/getProducts";

interface Product {
    id: number,
    name: string,
    price: number
}

const Home = () => {
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
                setFilteredProducts(products);
            } catch (error) {
                alert(`Ocorreu um erro ao carregar os produtos! ${error}`);
            }
        }

        fetchProducts();
    }, []);

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    function search(searchString:string | null | undefined){
        if (typeof searchString !== 'string' || searchString.length === 0){
            return products;
        }
        
        let searchLower = searchString.toLowerCase();
        let filtered = products.filter(product => {
            return product.name.toLowerCase().includes(searchLower);
        })
        
        return filtered;
    }

    function handleInputChange(){
        const productsFind = search(inputRef.current?.value);
        setFilteredProducts(productsFind);
    }

    return (
        <>
            <Header/>
            <main>
            <nav className="menu-nav">
                <h3 className="menu-nav__title">Categorias por espécie:</h3>
                <ul className="menu-nav__list">
                    <li className="menu-nav__item"><a className="menu-nav__link" href="">Cachorro</a></li>
                    <li className="menu-nav__item"><a className="menu-nav__link" href="">Gato</a></li>
                    <li className="menu-nav__item"><a className="menu-nav__link" href="">Aves</a></li>
                    <li className="menu-nav__item"><a className="menu-nav__link" href="">Peixes</a></li>
                    <li className="menu-nav__item"><a className="menu-nav__link" href="">Roedores</a></li>
                    <li className="menu-nav__item"><a className="menu-nav__link" href="">Répteis</a></li>
                </ul>
            </nav>
            <section className="products">
            <h2 className="subtitle">O melhor de Caruaru e região!</h2>    
            <input 
            className="products__search" 
            type="text" 
            placeholder="Pesquise na KI PetShop"
            ref={inputRef}
            onChange={handleInputChange}
            />
            <h3 className="products__subtitle">Confira nossa lista de produtos mais vendidos: </h3>
            {filteredProducts.length > 0 ? <ul className="products__list">
                {filteredProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    productId={product.id}
                    name={product.name}
                    price={product.price}
                    />
                ))}
            </ul> : <p className="products__notfind">Produto não encontrado!</p>}
            </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
