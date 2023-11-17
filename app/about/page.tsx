// import logo from './logo.svg';
import './about.css';
import 'animate.css';
import 'animate.css/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <div className='mb-20'>
    <section className="saCarousel">
    <div className="container">
      <div className="saCarousel__content">
        <div className="saCarousel__left">
          <div className="title">
            <p className="animate__animated animate__fadeInUp">We are The Best</p>
            <h2 className="animate__animated animate__fadeInUp animate__delay-1s">Be Yourself We Are The Best</h2>
          </div>
          <div className="saCarousel__article">
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              We develop the relationships that underpin the next phase in your <br /> organization’s growth.
            </p>
            <ul className="animate__animated animate__fadeInUp animate__delay-3s">
              <li>
              <i className="fa fa-check-circle"></i>
              We have a check icon
              </li>
              <li>
                <i className="fa fa-check"></i>
                We have a check icon
              </li>
            </ul>
            <button className="btn-gradient animate__animated animate__fadeInUp animate__delay-4s">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="saCarousel__right">
          <div className="saCarousel__banner animate__animated animate__fadeInUp animate__delay-3s">
            <img src='./assets/pic1_3.jpg' />
          </div>
        </div>
      </div>
    </div>
  </section> 
  <section className="services section-inner">
      <div className="container">
        <div className="title">
          <p>What We Do Best</p>
          <h2>Our Digital Services</h2>
        </div>
        <div className="services__content">
          <div className="services__item">
            <img src='./assets/pic1_3.jpg' alt="Web Development" />
            <h3>Web Development</h3>
            <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>
          </div>

          <div className="services__item">
            <img src='./assets/pic2_2.jpg'alt="Strategy & Research" />
            <h3>Strategy &amp; Research</h3>
            <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>
          </div>

          <div className="services__item">
            <img src='./assets/pic3_2.jpg'alt="Growth Tracking" />
            <h3>Growth Tracking</h3>
<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="aboutUs section-inner">
      <div className="container">
        <div className="aboutUs__content">
          <div
            className="aboutUs__left wow animate__ animate__fadeInLeft animated"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <img src='./assets/pic1.jpg'  />
          </div>
          <div
            className="aboutUs__right wow animate__ animate__fadeInRight animated"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="title">
              <p>About Us</p>
              <h2>
                Build Your <br /> Business Website <br /> Better
              </h2>
            </div>
            <p>
              Proin laoreet leo vel enim gravida, at porttitor metus ultricies. Cras eu velit enim. Vivamus blandit,
              dolor ut aliquet rutrum, ex elit mattis sapien, non molestie felis neque et nulla. Sed euismod turpis id nibh
              suscipit semper. Pellentesque dapibus risus arcu.
            </p>
            <ul>
              <li>
                <i className="fa fa-check"></i>We support programs that create advancement opportunities for people.
              </li>
              <li>
                <i className="fa fa-check"></i>Get a view of events and trends. Be updated on our recent news.
              </li>
              <li>
                <i className="fa fa-check"></i>Finally, it all comes down to people. Creating a winning team.
              </li>
              <li>
                <i className="fa fa-check"></i>Get a view of events and trends. Be updated on our recent news.
              </li>
            </ul>
            <button className="btn-gradient">learn more</button>
          </div>
        </div>
      </div>
    </section>

    <section className="number">
      <div className="container">
        <div className="number__content">
          <div className="number__item">
            <i className="fa fa-smile"></i>
            <p>
              <span className="counter">18</span> Ml
            </p>
            <p>Satisfied Clients</p>
          </div>
          <div className="number__item">
            <i className="fa fa-chart-line"></i>
            <p>
              <span className="counter">20</span> Ml
            </p>
            <p>Project Completed</p>
          </div>
          <div className="number__item">
            <i className="fa fa-rocket"></i>
            <p>
              <span className="counter">30</span> Ml
            </p>
            <p>Project Launched</p>
          </div>
          <div className="number__item">
            <i className="fab fa-angellist"></i>
            <p>
              <span className="counter">50</span>
            </p>
            <p>Years Completed</p>
</div>
        </div>
      </div>
    </section>

    <section className="features section-inner">
      <div className="container">
        <div className="features__content">
          <div className="features__left">
            <div
              className="title wow animate__ animate__fadeInLeft animated"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{
                visibility: 'visible',
                animationDuration: '2s',
                animationDelay: '0.2s',
                animationName: 'fadeInLeft',
              }}
            >
              <p>Our Features</p>
              <h2>Behind The Story <br /> Of Samar Agency</h2>
            </div>
            <div className="features__group">
              <div
                className="features__item wow animate__ animate__fadeInRight animated"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDuration: '2s',
                  animationDelay: '0.4s',
                  animationName: 'fadeInRight',
                }}
              >
                <div className="features__bg">
                <i className="fa fa-lightbulb"></i>
                  <div>
                    <h3>Idea &amp; Analysis Gathering</h3>
                    <p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
                  </div>
                </div>
              </div>
              <div
                className="features__item wow animate__ animate__fadeInRight animated"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
                style={{
                  visibility: 'visible',
                  animationDuration: '2s',
                  animationDelay: '0.6s',
                  animationName: 'fadeInRight',
                }}
              >
                <div className="features__bg">
                  <i className="fa fa-laptop-code"></i>
                  <div>
                    <h3>Design &amp; Developing</h3>
                    <p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
                  </div>
                </div>
              </div>
              <div
                className="features__item wow animate__ animate__fadeInRight animated"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
                style={{
                  visibility: 'visible',
                  animationDuration: '2s',
                  animationDelay: '0.8s',
                  animationName: 'fadeInRight',
                }}
              >
                <div className="features__bg">
                  <i className="fa fa-rocket"></i>
                  <div>
                    <h3>Testing &amp; Launching</h3>
<p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features__right">
            <div className="features__banner">
              <img src='./assets/pic3.jpg' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="portfolio section-inner">
      <div className="container">
        <div className="title">
          <p>Portfolio</p>
          <h2>Our Latest Work</h2>
        </div>
        <div className="portfolio__content" id="animated-thumbnails">
          <div className="portfolio__item portfolio__item1 wow animate__ animate__fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <img src='./assets/pic1_2.jpg' alt="" />
            <div className="portfolio__overlay">
              <div className="portfolio__icon">
                <a className="lightimg" data-thumb='./assets/pic1_2.jpg' data-fancybox="gallery" href="./assets/pic1_2.jpg" data-caption="Design 1">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
              <div className="portfolio__text">
                <h3>Software Landing</h3>
                <p>By Jhone Doe</p>
              </div>
            </div>
          </div>
          <div className="portfolio__item  wow animate__ animate__fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <img src='./assets/pic1_2.jpg' alt="" />
            <div className="portfolio__overlay">
              <div className="portfolio__icon">
                <a className="lightimg" data-thumb="./assets/pic2_1.jpg" data-fancybox="gallery" href="./assets/pic2_1.jpg" data-caption="Design 2">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
              <div className="portfolio__text">
                <h3>Software Landing</h3>
                <p>By Jhone Doe</p>
              </div>
            </div>
          </div>
          <div className="portfolio__item portfolio__item1 wow animate__ animate__fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <img src='./assets/pic1_2.jpg' alt="" />
            <div className="portfolio__overlay">
              <div className="portfolio__icon">
                <a className="lightimg" data-thumb='.assets/pic1_2.jpg' data-fancybox="gallery" href="./assets/pic1_2.jpg" data-caption="Design 3">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
              <div className="portfolio__text">
                <h3>Software Landing</h3>
                <p>By Jhone Doe</p>
              </div>
            </div>
          </div>
          
          {/* ... (Repeat the structure for other portfolio items) */}
        </div>
      </div>
    </section>


    </div>
    
  

  
  
 
      
    
    
  );
}

export default App;