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
            <p className="animate__animated animate__fadeInUp">NAL STORE</p>
            <h2 className="animate__animated animate__fadeInUp animate__delay-1s">Nơi Khơi Gợi Phong Cách Của Bạn</h2>
          </div>
          <div className="saCarousel__article">
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
            Luôn là điểm đến lý tưởng cho những ai yêu thích thời trang và mong muốn thể hiện cá tính riêng của bản thân. Chúng tôi cung cấp đa dạng các mặt hàng quần áo cho cả nam và nữ, từ phong cách năng động, trẻ trung đến thanh lịch, sang trọng.  <br />
            </p>
            
           
          </div>
        </div>
        <div className="saCarousel__right">
          <div className="saCarousel__banner animate__animated animate__fadeInUp animate__delay-3s">
            <img src='./assets/aboutus_1.webp' />
          </div>
        </div>
      </div>
    </div>
  </section> 
  <section className="services section-inner">
      <div className="container">
        <div className="title">
          <h2>Các Sản Phẩm Nổi Bật</h2>
        </div>
        <div className="services__content">
          <div className="services__item">
            <img src='./assets/aboutus_2.webp' alt="Web Development" />
            <h3>Áo</h3>
            <p>Chất liệu áo đa dạng, từ cotton mềm mại, thoáng mát đến poly bền đẹp, dễ giặt ủi, hay nỉ ấm áp, len giữ nhiệt tốt,... đáp ứng mọi nhu cầu của bạn.

</p>
          </div>

          <div className="services__item">
            <img src='./assets/aboutus_3.webp'alt="Strategy & Research" />
            <h3>Quần</h3>
            <p>Chất liệu quần phong phú, từ cotton mềm mại đến kaki dày dặn, denim cá tính, nỉ ấm áp,.. mang đến trải nghiệm mặc thoải mái và thời trang.</p>
          </div>

          <div className="services__item">
            <img src='./assets/aboutus_4.png'alt="Growth Tracking" />
            <h3>Giày Dép</h3>
            <p>Chất liệu đa dạng từ da cao cấp, da lộn mềm mại đến vải canvas thoáng mát, đế cao su êm ái, đảm bảo sự thoải mái và thời trang cho bạn.</p>
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
            <img src='./assets/aboutus_5.webp'  />
          </div>
          <div
            className="aboutUs__right wow animate__ animate__fadeInRight animated"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="title">
              <h2>
                Giá Trị Cốt Lõi Của Chúng Tôi
              </h2>
            </div>
            
            <ul>
              <li>
                <i className="fa fa-check"></i>Lựa chọn kỹ lưỡng từ nguồn hàng.
              </li>
              <li>
                <i className="fa fa-check"></i>Đa dạng trong phong cách.
              </li>
              <li>
                <i className="fa fa-check"></i>Cam kết giá thành hợp lý.
              </li>
              <li>
                <i className="fa fa-check"></i>Nhân viên luôn nhiệt tình hỗ trợ.
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>



    <section className="features section-inner">
      <div className="container">
        <div className="features__content">
          <div className="features__left">

            <div className="title wow animate__ animate__fadeInLeft animated" data-wow-duration="2s"

              data-wow-delay="0.2s"
              style={{
                visibility: 'visible',
                animationDuration: '2s',
                animationDelay: '0.2s',
                animationName: 'fadeInLeft',
              }}
            >
              <h2>Sứ Mệnh Của Chúng Tôi</h2>
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
                <i className="fa-solid fa-bag-shopping"></i>
                  <div>
                    <p>Mang đến trải nghiệm mua sắm thời trang hoàn hảo.</p>
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
                <i className="fa-solid fa-heart"></i>
                  <div>
                    <p>Làm khơi dậy niềm đam mê về thời trang.</p>
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
                    <p>Góp phần phát triển của ngành thời trang.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features__right">
            <div className="features__banner">
              <img src='./assets/aboutus_6.webp' alt="" />
            </div>
          </div>
        </div>
        </div>
    </section>

   


    </div>
    
  

  
  
 
      
    
    
  );
}

export default App;