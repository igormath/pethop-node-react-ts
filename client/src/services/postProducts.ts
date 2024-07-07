async function postProducts(name: string, price: number){
    try{
        const response = await fetch(`http://localhost:5000/produtos`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "price": price,
            })
        });

        const data = await response.json();

        return {
            data,
            status: response.status,
            ok: response.ok,
        };
    }catch(error){
        console.error(error);
        return {
            data: [],
            status: 500,
            ok: false,
        }
    }
}

export default postProducts;
