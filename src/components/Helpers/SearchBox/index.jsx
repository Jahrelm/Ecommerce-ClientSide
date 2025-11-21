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
      <div className={`w-full h-[48px] flex items-center ${className || ""}`}>
        <form 
          className="flex-1 flex items-center h-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex-1 relative">
            <input
              type="text"
              name="search"
              className="w-full h-[48px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-l-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
              placeholder="Search for products..." 
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="h-[48px] px-8 bg-gradient-to-r from-primary-blue to-blue-600 hover:from-blue-600 hover:to-primary-blue text-white text-sm font-semibold rounded-r-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            type="submit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </form>
      </div>
    </>
  );
}
