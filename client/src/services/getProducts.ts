async function getProducts(){
    try {
        const response = await fetch('http://localhost:5000/produtos/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export {getProducts};
