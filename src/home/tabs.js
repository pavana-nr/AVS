import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import "./tab.css";
import Carousel from "./carousel";

class Tabs extends Component {
state = {
  activeItem: "1"
}

toggle = tab => () => {
  if (this.state.activeItem !== tab) {
  this.setState({
    activeItem: tab
  });
  }
}

render() {
    return (
      <div className="container-fluid"> 
          <MDBNav tabs>
          <MDBNavItem className="card">
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
               Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="card">
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="card">
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
            >
             Committee
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="card">
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "4"}
              onClick={this.toggle("4")}
              role="tab"
            >
             Courses
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="card">
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "5"}
              onClick={this.toggle("5")}
              role="tab"
            >
             Contact Us
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
<div className="completeDiv d-flex">
<div className="fLeft">
          <div className="card m-3">
            <div className="bBottom">
              <div className="p-3">Schedule</div>
              </div>
              <div>
            <div className="p-3">Radio Program Formats</div>
            </div>
          </div>
        </div>
        <MDBTabContent
          className="tabData"
          activeItem={this.state.activeItem}
        >
              <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              Raw denim you probably haven't heard of them jean shorts
              Austin. Nesciunt tofu stumptown aliqua, retro synth master
              cleanse. Mustache cliche tempor, williamsburg carles vegan
              helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
              synth. Cosby sweater eu banh mi, qui irure terry richardson
              ex squid. Aliquip placeat salvia cillum iphone. Seitan
              aliquip quis cardigan american apparel, butcher voluptate
              nisi qui.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit,
              blog sartorial PBR leggings next level wes anderson artisan
              four loko farm-to-table craft beer twee. Qui photo booth
              letterpress, commodo enim craft beer mlkshk aliquip jean
              shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
              assumenda labore aesthetic magna delectus mollit. Keytar
              helvetica VHS salvia yr, vero magna velit sapiente labore
              stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
              sustainable jean shorts beard ut DIY ethical culpa terry
              richardson biodiesel. Art party scenester stumptown, tumblr
              butcher vero sint qui sapiente accusamus tattooed echo park.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Etsy mixtape wayfarers, ethical wes anderson tofu before
              they sold out mcsweeney's organic lomo retro fanny pack
              lo-fi farm-to-table readymade. Messenger bag gentrify
              pitchfork tattooed craft beer, iphone skateboard locavore
              carles etsy salvia banksy hoodie helvetica. DIY synth PBR
              banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
              Williamsburg banh mi whatever gluten-free, carles pitchfork
              biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
              you probably haven't heard of them, vinyl craft beer blog
              stumptown. Pitchfork sustainable tofu synth chambray yr.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel">
            <p className="mt-2">
              Etsy mixtape wayfarers, ethical wes anderson tofu before
              they sold out mcsweeney's organic lomo retro fanny pack
              lo-fi farm-to-table readymade. Messenger bag gentrify
              pitchfork tattooed craft beer, iphone skateboard locavore
              carles etsy salvia banksy hoodie helvetica. DIY synth PBR
              banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
              Williamsburg banh mi whatever gluten-free, carles pitchfork
              biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
              you probably haven't heard of them, vinyl craft beer blog
              stumptown. Pitchfork sustainable tofu synth chambray yr.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="5" role="tabpanel">
            <p className="mt-2">
              Etsy mixtape wayfarers, ethical wes anderson tofu before
              they sold out mcsweeney's organic lomo retro fanny pack
              lo-fi farm-to-table readymade. Messenger bag gentrify
              pitchfork tattooed craft beer, iphone skateboard locavore
              carles etsy salvia banksy hoodie helvetica. DIY synth PBR
              banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
              Williamsburg banh mi whatever gluten-free, carles pitchfork
              biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
              you probably haven't heard of them, vinyl craft beer blog
              stumptown. Pitchfork sustainable tofu synth chambray yr.
            </p>
          </MDBTabPane>
         
        </MDBTabContent>
        <div className="fRight">
          <h3 className="text-center">Testimonials</h3>
          <Carousel/>
          {/* <div className="p-3">
          <div>Radio</div>
          <div className="">Short terms courses</div>
          <ol>
            <li>Radio Program Production</li>
            <li>Radio Jockeying</li>
            <li>Radio script Writing</li>
          </ol>
          <div>TV</div>
          <ol>
            <li>Television Script Writing</li>
            <li>Anchoring</li>
            <ol>
              <li>News</li>
              <li>General Content</li>
            </ol>
          </ol>
        </div> */}
                  </div>
</div>
        
      </div>
    );
  }
}

export default Tabs;