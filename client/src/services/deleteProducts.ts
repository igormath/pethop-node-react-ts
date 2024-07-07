async function deleteProduct(id:number) {
    try {
        const response = await fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return {
            data, 
            status: response.status,
            ok: response.ok
        };
    } catch (error) {
        console.error(error);
        return {
            data: [],
            status: 500,
            ok: false
        };
    }
}

export default deleteProduct;
