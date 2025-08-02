/*async function fetchProducts1 () {
    const api = fetch("https://fakestoreapi.in/api/products");
}*/



const fetchProducts = async () => {

    try{
        const api = await fetch("https://fakestoreapi.in/api/products");
        const data = await api.json();
        console.log(data);
    } catch{
        console.log(err);
    } finally{
        console.log("Termino esta prueba!!")
    }
    
};

fetchProducts();



