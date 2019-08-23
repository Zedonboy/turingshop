import * as React from "react";

export default class Carousel extends React.Component {
  render() {
    return (
      <section className="section-slide">
        <div className="wrap-slick1">
          <button className="arrow-slick1 prev-slick1 slick-arrow" style={{}}>
            <i className="zmdi zmdi-caret-left" />
          </button>
          <div className="slick1 slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{ opacity: 1, width: "4059px" }}
              >
                <div
                  className="item-slick1 slick-slide"
                  style={{
                    backgroundImage: 'url("images/slide-01.jpg")',
                    width: "1353px",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    zIndex: 998,
                    opacity: 0,
                    transition: "opacity 1000ms ease 0s"
                  }}
                  data-slick-index={0}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="container h-full">
                    <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                      <div
                        className="layer-slick1 animated visible-false"
                        data-appear="fadeInDown"
                        data-delay={0}
                      >
                        <span className="ltext-101 cl2 respon2">
                          Women Collection 2018
                        </span>
                      </div>
                      <div
                        className="layer-slick1 animated visible-false"
                        data-appear="fadeInUp"
                        data-delay={800}
                      >
                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                          NEW SEASON
                        </h2>
                      </div>
                      <div
                        className="layer-slick1 animated visible-false"
                        data-appear="zoomIn"
                        data-delay={1600}
                      >
                        <a
                          href="product.html"
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                          tabIndex={-1}
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="item-slick1 slick-slide slick-current slick-active"
                  style={{
                    backgroundImage: 'url("images/slide-02.jpg")',
                    width: "1353px",
                    position: "relative",
                    left: "-1353px",
                    top: "0px",
                    zIndex: 999,
                    opacity: 1
                  }}
                  data-slick-index={1}
                  aria-hidden="false"
                  tabIndex={0}
                >
                  <div className="container h-full">
                    <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                      <div
                        className="layer-slick1 animated visible-false rollIn visible-true"
                        data-appear="rollIn"
                        data-delay={0}
                      >
                        <span className="ltext-101 cl2 respon2">
                          Men New-Season
                        </span>
                      </div>
                      <div
                        className="layer-slick1 animated visible-false lightSpeedIn visible-true"
                        data-appear="lightSpeedIn"
                        data-delay={800}
                      >
                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                          Jackets &amp; Coats
                        </h2>
                      </div>
                      <div
                        className="layer-slick1 animated visible-false slideInUp visible-true"
                        data-appear="slideInUp"
                        data-delay={1600}
                      >
                        <a
                          href="product.html"
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                          tabIndex={0}
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="item-slick1 slick-slide"
                  style={{
                    backgroundImage: 'url("images/slide-03.jpg")',
                    width: "1353px",
                    position: "relative",
                    left: "-2706px",
                    top: "0px",
                    zIndex: 998,
                    opacity: 0,
                    transition: "opacity 1000ms ease 0s"
                  }}
                  data-slick-index={2}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="container h-full">
                    <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                      <div
                        className="layer-slick1 animated visible-false"
                        data-appear="rotateInDownLeft"
                        data-delay={0}
                      >
                        <span className="ltext-101 cl2 respon2">
                          Men Collection 2018
                        </span>
                      </div>
                      <div
                        className="layer-slick1 animated visible-false"
                        data-appear="rotateInUpRight"
                        data-delay={800}
                      >
                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                          New arrivals
                        </h2>
                      </div>
                      <div
                        className="layer-slick1 animated visible-false"
                        data-appear="rotateIn"
                        data-delay={1600}
                      >
                        <a
                          href="product.html"
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                          tabIndex={-1}
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="arrow-slick1 next-slick1 slick-arrow" style={{}}>
            <i className="zmdi zmdi-caret-right" />
          </button>
        </div>
      </section>
    );
  }
}
