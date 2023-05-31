import React, { useState } from 'react';
import CategoryOne from './categories/CategoryOne';
import CategoryTwo from './categories/CategoryTwo';
import CategoryThree from './categories/CategoryThree';
import CategoryFour from './categories/CategoryFour';
import CategoryFive from './categories/CategoryFive';
import CategorySix from './categories/CategorySix';
import CategorySeven from './categories/CategorySeven';

export default function Category() {
  const [radioCategory, setCurrentCategory] = useState(1);

  const handleCategoryChange = (event) => {
    setCurrentCategory(parseInt(event.target.value));
  };

  const getradioCategory = () => {
    switch (radioCategory) {
      case 1:
        return <CategoryOne />;
      case 2:
        return <CategoryTwo />;
      case 3:
        return <CategoryThree />;
      case 4:
        return <CategoryFour />;
      case 5:
        return <CategoryFive />;
      case 6:
          return <CategorySix />;
      case 7:
          return <CategorySeven />;  
      default:
        return null;
    }
  };

  return (
    <div className="ctg-container">
      <input type="radio" name="slider" id="ctg-link-1" value="1"
        checked={radioCategory === 1} onChange={handleCategoryChange}/>
      <input type="radio" name="slider" id="ctg-link-2" value="2"
        checked={radioCategory === 2} onChange={handleCategoryChange}/>
      <input type="radio" name="slider" id="ctg-link-3" value="3"
        checked={radioCategory === 3} onChange={handleCategoryChange}/>
      <input type="radio" name="slider" id="ctg-link-4" value="4"
        checked={radioCategory === 4} onChange={handleCategoryChange}/>
      <input type="radio" name="slider" id="ctg-link-5" value="5"
        checked={radioCategory === 5} onChange={handleCategoryChange}/>
      <input type="radio" name="slider" id="ctg-link-6" value="6"
        checked={radioCategory === 6} onChange={handleCategoryChange}/>
      <input type="radio" name="slider" id="ctg-link-7" value="7"
        checked={radioCategory === 7} onChange={handleCategoryChange}/>

      <nav>
        <label htmlFor="ctg-link-1" className="ctg-link-1">Action Figure</label>
        <label htmlFor="ctg-link-2" className="ctg-link-2">Merchandise</label>
        <label htmlFor="ctg-link-3" className="ctg-link-3">On Hand Collectibles</label>
        <label htmlFor="ctg-link-4" className="ctg-link-4">New Arrivals</label>
        <label htmlFor="ctg-link-5" className="ctg-link-5">Limited Edition</label>
        <label htmlFor="ctg-link-6" className="ctg-link-6">Special Edition</label>
        <label htmlFor="ctg-link-7" className="ctg-link-7">On Sale Promo</label>
        <div className="ctg-slider"></div>
      </nav>    

      <div className="ctn-container">
        <div className={`ctg-content ctg-content-${radioCategory}`} key={radioCategory}>
          <div className="title">
            {getradioCategory()}
          </div>
        </div>
      </div>
    </div>
  );
}
