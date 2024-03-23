import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'

const Home = (props) => {
 
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Stock.AI</title>
          <meta property="og:title" content="Trusting Defensive Porpoise" />
        </Head>
        <div className="home-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer home-navbar-interactive"
          >
            <span className="logo">Stock.AI</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a className="bodySmall" href='https://acmwebfinal.vercel.app/PortFolioOptimization' target="_blank" >PortFolio Optimizations</a>
                <a href='https://acmwebfinal.vercel.app/stocks' target="_blank" className="home-nav22 bodySmall" >Market Trends</a>
                <a href='https://acmwebfinal.vercel.app/finance-news' target="_blank" className="home-nav32 bodySmall">News &amp; Events</a>
                <a href='https://acmwebfinal.vercel.app/Stock-Recommender' target="_blank" className="home-nav42 bodySmall">Decision-Making</a>
                <a href='https://acmwebfinal.vercel.app/ask-ai' target="_blank" className="home-nav52 bodySmall">Robo-Advisory</a>
              </nav>
              <div className="home-buttons">
                <button className="home-login buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="home-mobile-menu1 mobileMenu"
            >
              <div className="home-nav">
                <div className="home-top">
                  <span className="logo">Stock.AI</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="home-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <a  className="home-nav121 bodySmall" href='https://acmwebfinal.vercel.app/PortFolioOptimization' target="_blank">PortFolio Optimizations</a>
                  <a href='https://acmwebfinal.vercel.app/stocks' target="_blank" className="home-nav221 bodySmall">Market Trends</a>
                  <a  href='https://acmwebfinal.vercel.app/finance-news' target="_blank" className="home-nav321 bodySmall">
                    News &amp; Events
                  </a>
                  <a href='https://acmwebfinal.vercel.app/Stock-Recommender' target="_blank" className="home-nav421 bodySmall">Decision-Making</a>
                  <a href='https://acmwebfinal.vercel.app/ask-ai' target="_blank" className="home-nav521 bodySmall">Robo-Advisory</a>
                </nav>
                <div className="home-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="heroContainer home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">
                Empower Your Investment Decisions with Real-Time Analytics
              </h1>
              <span className="home-hero-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Stay ahead of the market trends with our cutting-edge
                      platform
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              <div className="home-btn-group">
                <button className="buttonFilled">Get Started Now</button>
                <button className="buttonFlat">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="featuresContainer">
            <div className="home-features1">
              <div className="home-container02">
                <span className="overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Empowering Asset Managers with Real-Time Insights
                </h2>
                <span className="home-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>
                        Enhance decision-making and advisory services with our
                        cutting-edge features
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container03">
                <FeatureCard
                  heading="Real-Time Market Analytics"
                  subHeading=" a platform delivering instantaneous market analysis, news updates, and event tracking. Asset managers gain swift access to crucial data, enabling agile decision-making. Integrated with robo-advisory platforms, RealTimeInsight personalizes recommendations based on client profiles, financial goals, and risk appetite. This synergy ensures timely, tailored investment strategies, empowering both asset managers and clients in navigating volatile markets with confidence."
                ></FeatureCard>
                <FeatureCard
                  heading="Real-Time Events Tracking"
                  subHeading=" 
                  Real-Time Events Tracking is a cutting-edge feature of our stock market app, offering instantaneous analytics on market trends, news updates, and event tracking. Asset managers gain immediate access to vital data, enabling swift decision-making. Integrated seamlessly with robo-advisory platforms, Real-Time Events Tracking delivers personalized recommendations tailored to individual client profiles, financial objectives, and risk tolerance. This empowers asset managers to make informed decisions and optimize investment strategies in response to dynamic market events."
                ></FeatureCard>
                <FeatureCard
                  heading="Real-Time Decision-Making"
                  subHeading="In our RealTimeInsight platform, we employ cutting-edge specialized bots designed specifically for real-time portfolio optimizations. These bots utilize advanced algorithms to continuously analyze market data and identify opportunities for portfolio enhancement. Additionally, they interact with AI-powered systems to address queries and uncertainties promptly, providing asset managers with the information they need to make swift, informed decisions. Moreover, our platform offers personalized stock recommendations tailored to each client's unique investment objectives and risk tolerance, further enhancing the effectiveness of real-time decision-making processes."
                ></FeatureCard>
                <FeatureCard
                  heading="Personalized Recommendations & AI-Assistance"
                  subHeading="we've implemented a groundbreaking approach to personalized recommendations and AI-assisted decision-making. Our system employs sophisticated algorithms that dynamically adapt to individual client profiles, financial goals, and risk tolerances. These algorithms interact seamlessly with AI-powered assistants, providing asset managers with real-time insights and guidance. Through this innovative combination, asset managers can optimize portfolio performance, address uncertainties, and capitalize on market opportunities with unparalleled precision and efficiency."
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="home-pricing">
          <div className="pricingContainer">
            <div className="home-container04">
              <span className="overline">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="heading2">Choose Your Plan</h2>
              <span className="home-pricing-sub-heading bodyLarge">
                <span>
                  <span>Select the plan that best suits your needs</span>
                </span>
              </span>
            </div>
            <div className="home-container05">
              <div className="freePricingCard home-pricing-card">
                <div className="home-container06">
                  <span className="home-text36 heading3">Free</span>
                  <span className="bodySmall">
                    Access to basic market trend analytics
                  </span>
                </div>
                <div className="home-container07">
                  <span className="home-text37">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">0</span>
                </div>
                <div className="home-container08">
                  <div className="home-container09">
                    <span className="home-text40">✔</span>
                    <span className="bodySmall">
                      Real-time market trend updates
                    </span>
                  </div>
                  <div className="home-container10">
                    <span className="home-text41">✔</span>
                    <span className="bodySmall">Basic news alerts</span>
                  </div>
                  <div className="home-container11">
                    <span className="home-text42">✔</span>
                    <span className="bodySmall">
                      Limited event notifications
                    </span>
                  </div>
                  <div className="home-container12">
                    <span className="home-text43">✔</span>
                    <span className="bodySmall">Decision-making support</span>
                  </div>
                </div>
                <button className="home-button buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="basicPricingCard home-pricing-card1">
                <div className="home-container13">
                  <span className="home-text44 heading3">BASIC</span>
                  <span className="bodySmall">
                    Enhanced market trend analytics and news coverage
                  </span>
                </div>
                <div className="home-container14">
                  <span className="home-text45">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">29</span>
                  <span className="home-text48">/ month</span>
                </div>
                <div className="home-container15">
                  <div className="home-container16">
                    <span className="home-text49">✔</span>
                    <span className="bodySmall">All features of FREE plan</span>
                  </div>
                  <div className="home-container17">
                    <span className="home-text51">✔</span>
                    <span className="bodySmall">
                      Real-time market trend updates
                    </span>
                  </div>
                  <div className="home-container18">
                    <span className="home-text52">✔</span>
                    <span className="bodySmall">
                      Comprehensive news coverage
                    </span>
                  </div>
                  <div className="home-container19">
                    <span className="home-text53">✔</span>
                    <span className="bodySmall">Event notifications</span>
                  </div>
                  <div className="home-container20">
                    <span className="home-text54">✔</span>
                    <span className="bodySmall">
                      Enhanced decision-making support
                    </span>
                  </div>
                </div>
                <button className="home-button1 buttonFilledSecondary">
                  Try the Basic plan
                </button>
              </div>
              <div className="proPricingCard home-pricing-card2">
                <div className="home-container21">
                  <span className="home-text55 heading3">
                    <span>PRO</span>
                    <br></br>
                  </span>
                  <span className="bodySmall">
                    Advanced market trend analytics, news, and event tracking
                  </span>
                </div>
                <div className="home-container22">
                  <span className="home-text58">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">59</span>
                  <span className="home-text61">/ month</span>
                </div>
                <div className="home-container23">
                  <div className="home-container24">
                    <span className="home-text62">✔</span>
                    <span className="bodySmall">
                       All features of BASIC plan
                    </span>
                  </div>
                  <div className="home-container25">
                    <span className="home-text64">✔</span>
                    <span className="bodySmall">
                      Real-time market trend updates
                    </span>
                  </div>
                  <div className="home-container26">
                    <span className="home-text65">✔</span>
                    <span className="bodySmall">Extensive news coverage</span>
                  </div>
                  <div className="home-container27">
                    <span className="home-text66">✔</span>
                    <span className="bodySmall">Detailed event tracking</span>
                  </div>
                  <div className="home-container28">
                    <span className="home-text67">✔</span>
                    <span className="bodySmall">
                      Advanced decision-making support
                    </span>
                  </div>
                </div>
                <button className="home-button2 buttonFilledSecondary">
                  Try the PRO plan
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="home-banner">
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              Enhance Your Robo-Advisory Experience with Personalized
              Recommendations
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    Our platform leverages advanced algorithms to provide
                    tailored investment suggestions based on your unique
                    financial profile, goals, and risk tolerance. Make informed
                    decisions with confidence.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <button className="buttonFilled">Learn More</button>
          </div>
        </div>
        <div className="home-faq">
          <div className="faqContainer">
            <div className="home-faq1">
              <div className="home-container29">
                <span className="overline">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text85 heading2">Common questions</h2>
                <span className="home-text86 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container30">
                <Question1
                  answer="The real-time analytics system uses advanced algorithms to scan and analyze various sources such as news websites, social media, financial reports, and market data feeds to provide up-to-date information on market trends, news, and events."
                  question="How does the real-time analytics system gather market trends, news, and events?"
                ></Question1>
                <Question1
                  answer="Asset managers can make quicker and more informed decisions by leveraging the real-time analytics system to stay ahead of market trends, identify potential opportunities or risks, and adjust their investment strategies accordingly."
                  question="How can asset managers benefit from the real-time analytics system?"
                ></Question1>
                <Question1
                  answer="Personalized recommendations for robo-advisory platforms are generated by analyzing individual customer profiles, financial goals, risk tolerance levels, and investment preferences using machine learning algorithms to tailor investment strategies that align with each customer's unique needs."
                  question="How are personalized recommendations generated for robo-advisory platforms?"
                ></Question1>
                <Question1
                  answer="Yes, customers have the flexibility to adjust their financial goals and risk tolerance preferences on robo-advisory platforms at any time. The platform will then recalibrate the investment recommendations based on the updated information provided by the customer."
                  question="Can customers adjust their financial goals and risk tolerance preferences on robo-advisory platforms?"
                ></Question1>
                <Question1
                  answer="The system employs robust security measures such as encryption protocols, access controls, and regular security audits to ensure the confidentiality and integrity of sensitive financial data for both asset managers and customers. Compliance with industry regulations is also a top priority to maintain data privacy and security."
                  question="How secure is the system in handling sensitive financial data for asset managers and customers?"
                ></Question1>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="footerContainer home-footer1">
            <div className="home-container31">
              <span className="logo">Stock.AI</span>
              <nav className="home-nav1">
                <span className="bodySmall">Home</span>
                <span className="home-nav222 bodySmall">Market Trends</span>
                <span className="home-nav322 bodySmall">News &amp; Events</span>
                <span className="home-nav422 bodySmall">Decision-Making</span>
                <span className="home-nav522 bodySmall">Robo-Advisory</span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container32">
              <span className="bodySmall home-text89">
                © 2023 myCompany, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon14 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav22 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav32 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav42 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav52 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: 32px;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav121 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav221 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav321 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav421 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav521 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 96px;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            max-width: 800px;
            text-align: center;
          }
          .home-hero-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .home-container02 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-container03 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr;
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-sub-heading {
            text-align: center;
          }
          .home-container05 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text36 {
            text-transform: uppercase;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text37 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container09 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text40 {
            line-height: 150%;
          }
          .home-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text41 {
            line-height: 150%;
          }
          .home-container11 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text42 {
            line-height: 150%;
          }
          .home-container12 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text43 {
            line-height: 150%;
          }
          .home-button {
            width: 100%;
          }
          .home-container13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text44 {
            text-transform: uppercase;
          }
          .home-container14 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text45 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text48 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container16 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text49 {
            line-height: 150%;
          }
          .home-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text51 {
            line-height: 150%;
          }
          .home-container18 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text52 {
            line-height: 150%;
          }
          .home-container19 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text53 {
            line-height: 150%;
          }
          .home-container20 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text54 {
            line-height: 150%;
          }
          .home-button1 {
            width: 100%;
          }
          .home-container21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text55 {
            text-transform: uppercase;
          }
          .home-container22 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text58 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text61 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container23 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text62 {
            line-height: 150%;
          }
          .home-container25 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text64 {
            line-height: 150%;
          }
          .home-container26 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text65 {
            line-height: 150%;
          }
          .home-container27 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text66 {
            line-height: 150%;
          }
          .home-container28 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text67 {
            line-height: 150%;
          }
          .home-button2 {
            width: 100%;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-banner-heading {
            text-align: center;
          }
          .home-banner-sub-heading {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container29 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text85 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text86 {
            text-align: left;
          }
          .home-container30 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container31 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav222 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav322 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav422 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav522 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container32 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text86 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-nav121 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav221 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav321 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav421 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav521 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container03 {
              grid-template-columns: 1fr;
            }
            .home-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq1 {
              flex-direction: column;
            }
            .home-container29 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text86 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container32 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text89 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu1 {
              padding: 16px;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container32 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text89 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
