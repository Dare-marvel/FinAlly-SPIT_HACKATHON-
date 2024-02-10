import React from 'react'
import "./HomeStyles.css"
import rightsecimg from "../assets/Finance.svg"
import verficiation from "../assets/Returns.svg"
import results from "../assets/Investments.svg"
import createexam from "../assets/Metric.svg"
import homeimg1 from "../assets/homeimg1.png"
import testi1 from "../assets/testi1.jpg"
import testi2 from "../assets/testi2.jpg"
import testi3 from "../assets/testi3.jpg"
import Footer from './Footer'
import { useEffect } from 'react'
import { Fade, Zoom, Slide } from "react-awesome-reveal";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.title = 'FinAlly | Home';
  }, [])
  return (
    <>
      <div className="sec1123">
        <div className="leftsec123">
          <h2>Your Finances FinAlly Made Easy!</h2>
          <div className="seewhy123"> FinAlly - Empowering Your Financial Independence.</div>
          <div className="seewhyinfo123"> Our fintech platform is meticulously engineered to empower individuals of all income levels in achieving their financial objectives and fostering wealth. With a keen emphasis on simplicity, accessibility, and financial literacy, FinAlly delivers a comprehensive suite of features tailored to facilitate micro-investment and savings. Whether you're just starting your financial journey or looking to grow your wealth, FinAlly provides the tools and resources you need to succeed. Experience the freedom of financial independence with FinAlly today.</div>
        </div>
        <div className="rightsec123">
          <img src={rightsecimg} alt="" id="firstimg123" />
        </div>
      </div>

      <div>
        <img src={homeimg1} alt="" className='footerimg' />
      </div>
      <div className="outerhead11">
        <Zoom>
          <div id='heading111'>Transparent Financial Health Insights</div>
        </Zoom>
      </div>
      <div className="sec2111">
        <div className="sec2div1222">
          <Fade left>
            <div className="left123">
              <h3>Score Ability Feature</h3>
              <div className="leftinfo123">
                <ul>
                  <li>Transparent Insights: Gain clear visibility into your financial health with FinAlly's Score Ability feature.</li>
                  <li>Data-Driven Decisions: Make informed choices based on precise financial understanding provided by FinAlly.</li>
                  <li>Optimized Strategies: Refine and maximize your financial plans with actionable insights from FinAlly.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="right123">
              <img src={createexam} alt="" id="secondimg123" />
            </div>
          </Fade>
        </div>


        <div className="sec2div1222">
          <Fade left>
            <div className="right123">
              <img src={verficiation} alt="" id="thirdimg123" />
            </div>
          </Fade>
          <Fade right>
            <div className="left123">
              <h3>Boosted Returns with FinAlly</h3>
              <div className="leftinfo123">
                <ul>
                  <li>Maximized Returns: Enjoy competitive interest rates with FinAlly, boosting your returns on investment.</li>
                  <li>Accelerated Growth: Benefit from higher rates, growing your savings faster compared to traditional banks.</li>
                  <li>Faster Goal Achievement: Achieve financial goals sooner with FinAlly's competitive rates, unlocking new opportunities for success.</li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
        <div className="sec2div1222">
          <Fade left>
            <div className="left123">
              <h3>Personalized Budgeting Solutions</h3>
              <div className="leftinfo123">
                <ul>
                  <li>Custom Salary Allocation: Personalize how you allocate your income to match your preferences and streamline budgeting.</li>
                  <li>Easy Budget Management: Allocate funds effortlessly for essentials, savings, and future plans with FinAlly's user-friendly features.</li>
                  <li>Smart Financial Planning: Optimize your finances by assigning portions to expenses, savings, and investments, helping you reach your goals efficiently.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="right123">
              <img src={results} alt="" id="forthimg123" />
            </div>
          </Fade>
        </div>

      </div >
      <Zoom>
        <div id='heading211'>Testimonials</div>
      </Zoom>
      <Slide bottom cascade>
        <div className="outertestimonials123">
          <div className="container1111">
            <div className="testimonial-box999">
              <div className="testimonial123">
                <i className="fas123 fa-quote-right"></i>
                <span className="testimonial-text123">"FinAlly transformed the way I manage my finances. With its intuitive interface and personalized budgeting tools, I now feel more in control of my money than ever before"</span>
                <div className="testimonial-user123">
                  <img src={testi1} alt="user-img" className="user-img123" />
                  <div className="user-info123">
                    <span className="user-name123">Sarah M</span>
                    <div className="user-job-details123">
                      <span className="user-job">Product Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container1111">
            <div className="testimonial-box999">
              <div className="testimonial123">
                <i className="fas123 fa-quote-right"></i>
                <span className="testimonial-text123">"I've tried other financial platforms, but none compare to FinAlly. Its competitive interest rates and effortless savings features have helped me grow my wealth faster than I thought possible."</span>
                <div className="testimonial-user123">
                  <img src={testi2} alt="user-img" className="user-img123" />
                  <div className="user-info123">
                    <span className="user-name123">John T</span>
                    <div className="user-job-details123">
                      <span className="user-job">Business Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container1111">
            <div className="testimonial-box999">
              <div className="testimonial123">
                <i className="fas123 fa-quote-right"></i>
                <span className="testimonial-text123">"Thanks to FinAlly, I finally have clarity on my financial health. The transparent insights and tailored budgeting solutions have empowered me to make smarter decisions and achieve my goals with confidence."</span>
                <div className="testimonial-user123">
                  <img src={testi3} alt="user-img" className="user-img123" />
                  <div className="user-info123">
                    <span className="user-name123">Emily L.</span>
                    <div className="user-job-details123">
                      <span className="user-job">Business Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Footer />
    </>
  )
}

export default Home