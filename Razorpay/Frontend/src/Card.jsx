import React from "react";
import Home from "./Home";

function Card() {
  return (
    <>
    
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-8 py-12 ">
      <Home name = "Laptop" image = "https://electronicparadise.in/cdn/shop/files/4_65e28377-a245-4b2d-b59a-9a4d1d88d331.jpg?v=1731587298" /> 
      <Home name = "Mobile" image = "https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80" />
      <Home  name = "SSD" image = "https://cdn.mos.cms.futurecdn.net/qToUNqFDhrMuoX7wHdPtgb-1200-80.jpg" />
      <Home  name = "Graphic card" image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwSYtBMYjx5NmefXRdk525OloLb7NrK8dJg&s" />
    </div>
    
    </>
  );
}

export default Card;


// always set responsiveness for mobile in tailwind flex flex-column this is for mobile 
// flex flex-col → On small screens, the cards will be stacked in a column.

// md:flex-row → On medium (≥768px) and larger screens, the cards will be in a row.

// gap-4 → Adds spacing between cards on small screens.

// md:gap-8 → Increases spacing on medium and larger screens.

// px-8 py-12 → Adds padding around the container.