const FetchData = async () => {
    const url = `https://dummyjson.com/products?limit=10`;
    const response = await fetch(url);
  
    const data = await response.json();
    return data
  };
  
  export default FetchData;
  