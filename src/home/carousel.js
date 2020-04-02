import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <h3 className="text-center">Data1</h3>
              <div>
              <img src={require('../images/person.png')} className="w-100"/>
              </div>
              <div className="p-2">
                <p>dfghjkl dfghjk rftgyhujk rftgyhujk dfghj dfghjk edrftgyhuj sdfghj sdfghj xdfghj dfghj dfgh 
                  sdxfcghbnj 
                  dcfvgbhnjmk,
                  cfvghjkl
                  sxdcfvgbhnjmk
                </p>
                <small>- Pavana N R</small>
              </div>
              {/* <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt="First slide"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <h3 className="text-center">Data2</h3>
            <div>
              <img src={require('../images/person.png')} className="w-100"/>
              </div>
              <div className="p-2">
                <p>dfghjkl dfghjk rftgyhujk rftgyhujk dfghj dfghjk edrftgyhuj sdfghj sdfghj xdfghj dfghj dfgh 
                  sdxfcghbnj 
                  dcfvgbhnjmk,
                  cfvghjkl
                  sxdcfvgbhnjmk
                </p>
                <small>- Pavana N R</small>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <h3 className="text-center">Data3</h3>
            <div>
              <img src={require('../images/person.png')} className="w-100"/>
              </div>
              <div className="p-2">
                <p>dfghjkl dfghjk rftgyhujk rftgyhujk dfghj dfghjk edrftgyhuj sdfghj sdfghj xdfghj dfghj dfgh 
                  sdxfcghbnj 
                  dcfvgbhnjmk,
                  cfvghjkl
                  sxdcfvgbhnjmk
                </p>
                <small>- Pavana N R</small>
              </div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;