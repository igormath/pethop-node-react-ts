async function putProduct(id:number, updatedProductName: string, updatedProductPrice: number) {
    try {
        const response = await fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: updatedProductName,
                price: updatedProductPrice,
            }),
        });
        const data = await response.json();
        return {
            data: data,
            status: response.status,
            ok: response.ok
        };
    } catch (error) {
        console.error(error);
        return {
            data: [],
            status: 500,
            ok: false
        }
    }
}

export default putProduct;
