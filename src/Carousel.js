import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  const rightArrow = document.querySelector(".bi-arrow-right-circle")
  const leftArrow = document.querySelector(".bi-arrow-left-circle")

  //Increments currCardIdx state by 1
  function goForward(e) {
    if (currCardIdx <= photos.length - 2) setCurrCardIdx(currCardIdx + 1);
  }
  function goBack(){
    if (currCardIdx > 0) setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx > 0 ?
         <i
         className="bi bi-arrow-left-circle"
         onClick={goBack}
        />
        : <> </>}
        
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx < photos.length -1 ? 
         <i
         className="bi bi-arrow-right-circle"
         onClick={goForward}
        />
        : <></>}
       
      </div>
    </div>
  );
}

export default Carousel;
