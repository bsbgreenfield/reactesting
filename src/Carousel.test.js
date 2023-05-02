import { render, fireEvent, getByAltText } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders correctly in the DOM", function() {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />)
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function(){
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );


  // click to the right (should work)
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  let image1 = container.querySelector('img[alt="testing image 1"]')
  let image2 = container.querySelector('img[alt="testing image 2"]')

  expect(image1).not.toBeInTheDocument();
  expect(image2).toBeInTheDocument();

  // click to from the secong image back to the first
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  image1 = container.querySelector('img[alt="testing image 1"]')
  image2 = container.querySelector('img[alt="testing image 2"]')

  expect(image2).not.toBeInTheDocument();
  expect(image1).toBeInTheDocument();
})

it('doesnt display the right arrow on the last image or the left arrow on the first', function(){
  const {container} = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  let rightArrow = container.querySelector('.bi-arrow-right-circle')
  let leftArrow = container.querySelector(".bi-arrow-left-circle");

  // initially, the left arrow should be hidden
  expect(rightArrow).toBeInTheDocument();
  expect(leftArrow).not.toBeInTheDocument()

  // scroll 
  fireEvent.click(rightArrow);

  rightArrow = container.querySelector('.bi-arrow-right-circle')
  leftArrow = container.querySelector(".bi-arrow-left-circle");

  // both should be there
  expect(rightArrow).toBeInTheDocument();
  expect(leftArrow).toBeInTheDocument()

  fireEvent.click(rightArrow);

  rightArrow = container.querySelector('.bi-arrow-right-circle')
  leftArrow = container.querySelector(".bi-arrow-left-circle");
  
  //only the left arrow should be there
  expect(rightArrow).not.toBeInTheDocument();
  expect(leftArrow).toBeInTheDocument()

})


