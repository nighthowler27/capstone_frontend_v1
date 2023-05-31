// import React, { useState } from 'react';
// import FunkoPop from './ctgOne/FunkoPop';
// import Nendroid from './ctgOne/Nendroid';
// import Pvc from './ctgOne/Pvc';
// import Resin from './ctgOne/Resin';

// export default function CategoryOne() {
//   const [radioCategory, setCurrentCategory] = useState(1);

//   const handleCategoryChange = (event) => {
//     setCurrentCategory(parseInt(event.target.value));
//   };

//   const getradioCategory = () => {
//     switch (radioCategory) {
//       case 1:
//         return <FunkoPop />;
//       case 2:
//         return <Nendroid />;
//       case 3:
//         return <Pvc />;
//       case 4:
//         return <Resin />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="ctg1-container">
//       <input type="radio" name="slider" id="ctg1-link-1" value="1"
//         checked={radioCategory === 1} onChange={handleCategoryChange}/>
//       <input type="radio" name="slider" id="ctg1-link-2" value="2"
//         checked={radioCategory === 2} onChange={handleCategoryChange}/>
//       <input type="radio" name="slider" id="ctg1-link-3" value="3"
//         checked={radioCategory === 3} onChange={handleCategoryChange}/>
//       <input type="radio" name="slider" id="ctg1-link-4" value="4"
//         checked={radioCategory === 4} onChange={handleCategoryChange}/>

//       <nav>
//         <label htmlFor="ctg1-link-1" className="ctg1-link-1">FUNKO POP</label>
//         <label htmlFor="ctg1-link-2" className="ctg1-link-2">NENDROID</label>
//         <label htmlFor="ctg1-link-3" className="ctg1-link-3">PVC</label>
//         <label htmlFor="ctg1-link-4" className="ctg1-link-4">RESIN</label>
//         <div className="ctg1-slider"></div>
//       </nav>

//       <div className="ctg1-ctn-container">
//         <div className={`ctg-content ctg-content-${radioCategory}`} key={radioCategory}>
//           <div className="title">
//             {getradioCategory()}
//           </div>
//         </div>
//       </div>
//     </div> 
//   )
// }
// export default function CategoryOne() {
//   return (
//     <div className="ctg1-container">
//       <input type="radio" name="ctg1-slider" id="ctg1-link-1"/>
//       <input type="radio" name="ctg1-slider" id="ctg1-link-2"/>
//       <input type="radio" name="ctg1-slider" id="ctg1-link-3"/>
//       <input type="radio" name="ctg1-slider" id="ctg1-link-4"/>

//       <nav>
//         <label for="ctg1-link-1" class="ctg1-link-1">FUNKO POP</label>
//         <label for="ctg1-link-1" class="ctg1-link-1">NENDROID</label>
//         <label for="ctg1-link-1" class="ctg1-link-1">PVC</label>
//         <label for="ctg1-link-1" class="ctg1-link-1">RESIN</label>
//         <div class="ctg1-slider"></div>
//       </nav>

//       <div class="ctg1-ctn-container">
//         <div class="ctg1-ctn ctn-1">
//           <div>Funko Pop</div>
//         </div>

//         <div class="ctg1-ctn ctn-2">
//           <div>Nendroid</div>
//         </div>
        
//         <div class="ctg1-ctn ctn-3">
//           <div>PVC</div>
//         </div>

//         <div class="ctg1-ctn ctn-4">
//           <div>Resin</div>
//         </div>          
//       </div>      
//     </div>
//   )
// }

import React, { useState } from 'react';

export default function CategoryOne() {
  const [selectedRadio, setSelectedRadio] = useState('ctg1-link-1');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="ctg1-container">
      <input
        type="radio"
        name="ctg1-slider"
        id="ctg1-link-1"
        checked={selectedRadio === 'ctg1-link-1'}
        onChange={handleRadioChange}
      />
      <input
        type="radio"
        name="ctg1-slider"
        id="ctg1-link-2"
        checked={selectedRadio === 'ctg1-link-2'}
        onChange={handleRadioChange}
      />
      <input
        type="radio"
        name="ctg1-slider"
        id="ctg1-link-3"
        checked={selectedRadio === 'ctg1-link-3'}
        onChange={handleRadioChange}
      />
      <input
        type="radio"
        name="ctg1-slider"
        id="ctg1-link-4"
        checked={selectedRadio === 'ctg1-link-4'}
        onChange={handleRadioChange}
      />

      <nav>
        <label htmlFor="ctg1-link-1" className={`ctg1-link-1 ${selectedRadio === 'ctg1-link-1' ? 'selected' : ''}`}>
          FUNKO POP
        </label>
        <label htmlFor="ctg1-link-2" className={`ctg1-link-2 ${selectedRadio === 'ctg1-link-2' ? 'selected' : ''}`}>
          NENDROID
        </label>
        <label htmlFor="ctg1-link-3" className={`ctg1-link-3 ${selectedRadio === 'ctg1-link-3' ? 'selected' : ''}`}>
          PVC
        </label>
        <label htmlFor="ctg1-link-4" className={`ctg1-link-4 ${selectedRadio === 'ctg1-link-4' ? 'selected' : ''}`}>
          RESIN
        </label>
        <div className="ctg1-slider"></div>
      </nav>

      <div className="ctg1-ctn-container">
        <div className={`ctg1-ctn ctn-1 ${selectedRadio === 'ctg1-link-1' ? 'active' : ''}`}>
          
        </div>

        <div className={`ctg1-ctn ctn-2 ${selectedRadio === 'ctg1-link-2' ? 'active' : ''}`}>
          
        </div>

        <div className={`ctg1-ctn ctn-3 ${selectedRadio === 'ctg1-link-3' ? 'active' : ''}`}>
          
        </div>

        <div className={`ctg1-ctn ctn-4 ${selectedRadio === 'ctg1-link-4' ? 'active' : ''}`}>
          
        </div>
      </div>
    </div>
  );
}
