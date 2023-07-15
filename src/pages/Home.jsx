import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchData(){
    setLoading(true);
    let result = await fetch(API_URL);
    let response = await result.json();
    try {
      setDatas(response);
    } catch (error) {
      alert("Data Unavailable");
      setDatas([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return(
    <div >
      {
        loading?<div className="flex justify-center items-center h-screen" ><Spinner/></div>: datas.length > 0 ? 
        (<div className="flex flex-wrap w-[1280px] mx-auto gap-9 justify-center my-11">
          {
            datas.map( (data) => (
            <Product key = {data.id} data={data}/>
          ) )
          }
        </div>) :
        <div>
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
