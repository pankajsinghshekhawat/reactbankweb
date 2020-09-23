import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
 <body data-spy="scroll" data-target=".fixed-top">






 <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h1><span >Bank Website design Template</span></h1>
                            <p class="p-large">A bank is a financial institution that accepts  A bank is a financial institution that acceptsdeposits from the public and creates a demand deposit while simultaneously making loans</p>
                            <a class="btn-solid-lg page-scroll" href="#services">LEARN MORE</a>
                        </div> 
                    </div> 
                    <div class="col-lg-6">
                      
                           
                        
                        
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
    <div id="services" class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Card Features and Banefits</h2>
                    
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                   
                    <div class="card">
                        <Image class="card-image"
                      src={require('./../../assets/images/air.jpg')}
                      alt="Features tile icon 01"
                     />
                        <div class="card-body">
                              <h4 class="card-title">Rewards</h4>
                            <p>Banking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but in many ways functioned as a continuation of ideas.</p>
                        </div>
                    </div>
                  

                   
                    <div class="card">
                    <Image class="card-image"
                      src={require('./../../assets/images/air.jpg')}
                      alt="Features tile icon 01"
                     />                       
                        <div class="card-body">
                            <h4 class="card-title">Travel</h4>
                            <p>Banking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but in many ways functioned as a continuation of ideas.</p>
                        </div>
                    </div>
                    

                   
                    <div class="card">
                    <Image class="card-image"
                      src={require('./../../assets/images/air.jpg')}
                      alt="Features tile icon 01"
                     />
                        <div class="card-body">
                            <h4 class="card-title">Low Interest</h4>
                            <p>Banking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but in many ways functioned as a continuation of ideas.</p>
                        </div>
                    </div>
                    <div class="card">
                    <Image class="card-image"
                      src={require('./../../assets/images/air.jpg')}
                      alt="Features tile icon 01"
                     />
                              <div class="card-body">
                                    <h4 class="card-title">Balance Transfer</h4>
                                    <p>Banking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but in many ways functioned as a continuation of ideas.</p>
                              </div>
                          </div>
                          <div class="card">
                          <Image class="card-image"
                      src={require('./../../assets/images/air.jpg')}
                      alt="Features tile icon 01"
                     />
                              <div class="card-body">
                                    <h4 class="card-title">cash Back</h4>
                                    <p>Banking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but in many ways functioned as a continuation of ideas.</p>
                              </div>
                          </div>
                          <div class="card">
                          <Image class="card-image"
                      src={require('./../../assets/images/air.jpg')}
                      alt="Features tile icon 01"
                     />
                              <div class="card-body">
                                    <h4 class="card-title">Zero Percent</h4>
                                    <p>Banking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but in many ways functioned as a continuation of ideas.</p>
                              </div>
                          </div>
                  
                    
                </div> 
            </div> 
        </div> 
    </div> 
  
    <div class="constructor">
    <div id="services" class="cards-11">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2>Business Banking</h2>
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                              <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Payment Technologles</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Investing Basics</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Card Benefits</a>
                              </li>
                              <li class="nav-item">
                                        <a class="nav-link" id="pankaj" data-toggle="tab" href="#pankaj" role="tab" aria-controls="pankaj" aria-selected="false">Digital Wallects</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" id="balveer" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Find a creditcard</a>
                                      </li>
                                      
                            </ul>
                            <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="basic-2">
                                                  <div class="container">
                                                      <div class="row">
                                                          <div class="col-lg-6">
                                                              <div class="image-container">
                                                              <Image class="img-fluid"
                      src={require('./../../assets/images/girl.jpg')}
                      alt="Features tile icon 01"
                     />
                                                              </div> 
                                                          </div> 
                                                          <div class="col-lg-6">
                                                              <div class="text-container">
                                                                  <h2> <span>Transforming the way you pay explore new ways to pay</span> </h2>
                                                                  <ul class="list-unstyled li-space-lg">
                                                                      <li class="media">
                                                                          <i class="fas fa-check"></i>
                                                                          <div class="media-body">The Bank of England originated the permanent issue of banknotes in 1695.[10] The Royal Bank of Scotland established the first overdraft facility in 1728.[11] By the beginning of the 19th century Lubbock's Bank had established a bankers' clearing house in London to allow multiple banks to clear transactions. The Rothschilds pioneered </div>
                                                                      </li>
                                                                      <li class="media">
                                                                          <i class="fas fa-check"></i>
                                                                          <div class="media-body">In order to develop your company and reach new heights</div>
                                                                      </li>
                                                                      <li class="media">
                                                                          <i class="fas fa-check"></i>
                                                                          <div class="media-body">Everyone will be pleased from stakeholders to employees</div>
                                                                      </li>
                                                                  </ul>
                                                                  <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LEARN MORE</a>
                                                              </div> 
                                                          </div> 
                                                      </div> 
                                                  </div> 
                                              </div>
                              </div>
                              <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="basic-2">
                                                  <div class="container">
                                                      <div class="row">
                                                          <div class="col-lg-6">
                                                              <div class="image-container">
                                                              <Image class="card-image"
                      src={require('./../../assets/images/pankaj.jpg')}
                      alt="Features tile icon 01"
                     />
                                                              </div> 
                                                          </div> 
                                                          <div class="col-lg-6">
                                                              <div class="text-container">
                                                                  <h2> <span>Bank lone bank lone </span> </h2>
                                                                  <ul class="list-unstyled li-space-lg">
                                                                      <li class="media">
                                                                          <i class="fas fa-check"></i>
                                                                          <div class="media-body">The Bank of England originated the permanent issue of banknotes in 1695.[10] The Royal Bank of Scotland established the first overdraft facility in 1728.[11] By the beginning of the 19th century Lubbock's Bank had established a bankers' clearing house in London to allow multiple banks to clear transactions. The Rothschilds pioneered international finance on a large scale,[12][13] financing the purchase of shares in the Suez canal for the British government in 1875</div>
                                                                      </li>
                                                                      <li class="media">
                                                                          <i class="fas fa-check"></i>
                                                                          <div class="media-body">In order to develop your company and reach new heights</div>
                                                                      </li>
                                                                      <li class="media">
                                                                          <i class="fas fa-check"></i>
                                                                          <div class="media-body">Everyone will be pleased from stakeholders to employees</div>
                                                                      </li>
                                                                  </ul>
                                                                  <a class="btn-solid-reg popup-with-move-anim" href="#">LEARN MORE</a>
                                                              </div> 
                                                          </div> 
                                                      </div> 
                                                  </div> 
                                              </div>
                              </div>
                              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                              <div class="tab-pane fade" id="pankaj" role="tabpanel" aria-labelledby="pankaj-tab">...</div>
                              <div class="tab-pane fade" id="balveer" role="tabpanel" aria-labelledby="balveer-tab">...</div>
                              <div class="tab-pane fade" id="ssss" role="tabpanel" aria-labelledby="ssss-tab">...</div>
                            </div>





                      
                  </div> 
              </div> 
              <div class="row">
                  <div class="col-lg-12">

                    
          </div> 
</div> 
</div> 
</div>
</div>


<div id="services" class="cards-1">
          <div class="container">
              <div class="row">
                 
                    <div class="col-lg-6">
                              <div class="text-container">
                                  <h2> <span>Choose your Parfect card</span> </h2>
                                  <ul class="list-unstyled li-space-lg">
                                      <li class="media">
                                     
                                          <div class="media-body">Basically we'll teach you step by step what you need to do</div>
                                      </li>
                                      <li class="media">
                                     
                                          <div class="media-body">In order to develop your company and reach new heights</div>
                                      </li>
                                      <li class="media">
                                     
                                          <div class="media-body">Everyone will be pleased from stakeholders to employees</div>
                                      </li>
                                  </ul>
                                  
                              </div> 
                          </div>
                 
                          <div class="col-lg-3">
                              <div class="image-container">
                              <Image class="img-fluid"
                      src={require('./../../assets/images/home.jpg')}
                      alt="Features tile icon 01"
                     />
                              </div> 
                          </div> 
                          <div class="col-lg-3">
                              <div class="image-container">
                              <Image class="img-fluid"
                      src={require('./../../assets/images/atm.jfif')}
                      alt="Features tile icon 01"
                     />
                              </div> 
                          </div> 
                      
             
              </div> 
              <div class="row">
                  <div class="col-lg-12">


                    </div>
                    </div>
                    </div>
                    </div>



    <script src="js/jquery.min.js"></script> 
    
    <script src="js/bootstrap.min.js"></script> 
    

    </body>

    </section>
  );
  }

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;