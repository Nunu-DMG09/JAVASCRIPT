export const miPrimeraPromesa=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let validacion = false;

            if(validacion){
                resolve("La promesa se ha resuelto correctamente");
            } else{
                reject("La promesa ha fallado");
            }
        }, 2000);
    });
}; 



const url='https://fakestoreapi.in/api/products'

 export const getProducts =async() => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

