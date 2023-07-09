import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearchBar }) => {
  const [query, setQuery] =useState("")
  const navigate = useNavigate();

  const onChange = (e) =>{
    setQuery(e.target.value);
  }
  let {data} = useFetch(`/api/products?populate=*&filters[name][$contains]=${query}`);

  if(!query.length){
    data= null;
  }

  return (
    <div className="search-model">
      <div className="form-field">
        <input 
        type="text" 
        autoFocus 
        placeholder="Search for products"
        value={query}
        onChange={onChange} />
        <MdClose onClick={() => setShowSearchBar(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-result-item"
            onClick={() => {
                navigate("/product/" + item.id);
                setShowSearchBar(false);
            }}>
            <div className="img-container">
              <img src={process.env.REACT_APP_DEV_URL + 
            item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{item.attributes.name}</span>
                <span className="desc">{item.attributes.description}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
