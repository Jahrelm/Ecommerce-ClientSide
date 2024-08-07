import { useDispatch } from 'react-redux';
import { searchProducts } from '../../../redux/actions/productActions';
import { useState } from 'react';



export default function SearchBox({className,type}) {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
 

  const handleSearch = () => {
    dispatch(searchProducts(title));

  };
  const handleInputChange = (e) => {
    setTitle(e.target.value)
  };

  return (
    <>
      <div
        className={`w-full h-full flex items-center  border border-qgray-border bg-white ${
          className || ""
        }`}
      >
        <div className="flex-1 bg-red-500 h-full">
          <form 
              className="h-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();

              }}
          >
            <input
              type="text"
              name="search"
              className="search-input"
              placeholder="Search Product..." 
              value={title}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className="w-[1px] h-[22px] bg-qgray-border"></div>
     {/*    <div className="flex-1 flex items-center px-4">
          <button
            type="text"
            className="w-full text-xs font-500 text-qgray flex justify-between items-center"
          >
            <span>All Categories</span>
            <span>
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="9.18359"
                  y="0.90918"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(135 9.18359 0.90918)"
                  fill="#8E8E8E"
                />
                <rect
                  x="5.08984"
                  y="5"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(-135 5.08984 5)"
                  fill="#8E8E8E"
                />
              </svg>
            </span>
          </button>
        </div> */}
        <button
          className={`w-[93px] h-full text-sm font-600 ${type === 3 ? 'bg-qh3-blue text-white' : 'bg-customBlue text-white'}`}
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}
