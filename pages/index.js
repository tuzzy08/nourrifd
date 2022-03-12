import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<meta charset='utf-8' />
				<meta http-equiv='x-ua-compatible' content='ie=edge' />
				<meta name='description' content='' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>

				<title>Nourri Foods</title>

				<link
					rel='shortcut icon'
					href='assets/images/custom/nourri.png'
					type='image/png'
				/>
				<link rel='stylesheet' href='assets/css/bootstrap.min.css' />

				<link rel='stylesheet' href='assets/css/font-awesome.min.css' />

				<link rel='stylesheet' href='assets/css/animate.min.css' />

				<link rel='stylesheet' href='assets/css/magnific-popup.css' />

				<link rel='stylesheet' href='assets/css/slick.css' />

				<link rel='stylesheet' href='assets/css/custom-animation.css' />
				<link rel='stylesheet' href='assets/css/default.css' />

				<link rel='stylesheet' href='assets/css/style.css' />

				<link rel='stylesheet' href='assets/css/responsive.css' />
				<link rel='icon' href='/favicon.ico' />
				<script src='assets/js/jquery-3.6.0.js' />

				<script src='assets/js/vendor/modernizr-3.6.0.min.js' />
				<script src='assets/js/vendor/jquery-1.12.4.min.js' />

				<script src='assets/js/bootstrap.min.js' />
				<script src='assets/js/popper.min.js' />

				<script src='assets/js/wow.js' />

				<script src='assets/js/jquery.counterup.min.js' />
				<script src='assets/js/waypoints.min.js' />
				<script src='assets/js/TweenMax.min.js' />

				<script src='assets/js/slick.min.js' />

				<script src='assets/js/jquery.magnific-popup.min.js' />

				<script src='assets/js/main.js' />
			</Head>

			<body>
				<div id='preloader-wrap'>
					<div id='loading'>
						<span id='loading-img'>Loading...</span>
					</div>
				</div>

				<div id='preloading'>
					<img src='assets/images/traffic-thumb.png' alt='' />
				</div>

				<div className='off_canvars_overlay'></div>
				<div className='offcanvas_menu'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-12'>
								<div className='offcanvas_menu_wrapper'>
									<div className='canvas_close'>
										<a href='javascript:void(0)'>
											<i className='fa fa-times'></i>
										</a>
									</div>
									<div className='offcanvas-brand text-center mb-40'>
										<img src='assets/images/logo.png' alt='' />
									</div>
									<div id='menu' className='text-left '>
										<ul className='offcanvas_main_menu'>
											<li className='menu-item-has-children active'>
												<a href='#'>Home</a>
											</li>
											<li className='menu-item-has-children active'>
												<a href='#about'>About</a>
											</li>
											<li className='menu-item-has-children active'>
												<a href='#contact'>Contact</a>
											</li>
										</ul>
									</div>
									<div className='offcanvas-social'>
										<ul className='text-center'>
											<li>
												<a href='https://facebook.com/nourrifd'>
													<i className='fab fa-facebook-f'></i>
												</a>
											</li>
											<li>
												<a href='https://twitter.com/nourrifd'>
													<i className='fab fa-twitter'></i>
												</a>
											</li>
											<li>
												<a href='https://instagram.com/nourrifd'>
													<i className='fab fa-instagram'></i>
												</a>
											</li>
										</ul>
									</div>
									<div className='footer-widget-info'>
										<ul>
											<li>
												<a href='#'>
													<i className='fal fa-envelope'></i>{' '}
													support@nourrifd.com
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fal fa-phone'></i> 08179618760
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fal fa-map-marker-alt'></i> #20 Igbodo
													street, Old GRA, Port Harcourt, Rivers State
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<header className='appie-header-area appie-sticky'>
					<div className='container'>
						<div className='header-nav-box'>
							<div className='row align-items-center'>
								<div className='col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1'>
									<div className='appie-logo-box'>
										<a href='#'>
											<img
												src='assets/images/custom/NOURRI 1920 X 1080.png'
												alt=''
											/>
										</a>
									</div>
								</div>
								<div className='col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2'>
									<div className='appie-header-main-menu'>
										<ul>
											<li>
												<a href='#'>Home</a>
											</li>
											<li>
												<a href='#about'>About</a>
											</li>
											<li>
												<a href='#contact'>Contact</a>
											</li>
											<li>
												<a href='/policy.html'>Privacy</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<section className='appie-hero-area'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<div className='appie-hero-content'>
									<span>Nourri Food</span>
									<h1 className='appie-title'>
										A premier food delivery company
									</h1>
									<p>
										{' '}
										Our focus is making your meals as conveninent and delightful
										as can be. We manage the hassles so you can focus on what
										matters most-"enjoying your meal".
									</p>
									<ul>
										<li>
											<a className='animated_btn animated_btn-ios' href='#'>
												<i className='fab fa-apple'></i> Download for iOS
											</a>
										</li>
										<li>
											<a className='item-2 animated_btn2' href='#'>
												<i className='fab fa-google-play'></i> Download for
												Android
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='appie-hero-thumb'>
									<div className='thumb'>
										<img src='assets/images/custom/hero-thumb-2.jpg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='hero-shape-1'>
						<img src='assets/images/shape/shape-2.png' alt='' />
					</div>
					<div className='hero-shape-2'>
						<img src='assets/images/shape/shape-3.png' alt='' />
					</div>
					<div className='hero-shape-3'>
						<img src='assets/images/shape/shape-4.png' alt='' />
					</div>
				</section>

				<section className='appie-service-area pt-90 pb-100' id='service'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'>
								<div className='appie-section-title text-center'>
									<h3 className='appie-title'>Seamless Food Delivery</h3>
									<p>Order and enjoy your meal in 3 simple steps.</p>
								</div>
							</div>
						</div>
						<div className='row justify-content-center'>
							<div className='col-lg-3 col-md-6'>
								<div
									className='appie-single-service text-center mt-30 wow animated fadeInUp'
									data-wow-duration='2000ms'
									data-wow-delay='200ms'
								>
									<div className='icon'>
										{/* <i className="fa fa-search" aria-hidden="true"></i> */}
										<img src='assets/images/icon/french-fries.png' alt='' />
										<span>1</span>
									</div>
									<h4 className='appie-title'>Select your meal</h4>
									<p>Pick your desired meal from your favorite restaurants.</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div
									className='appie-single-service text-center mt-30 item-2 wow animated fadeInUp'
									data-wow-duration='2000ms'
									data-wow-delay='400ms'
								>
									<div className='icon'>
										<img src='assets/images/icon/order-food.png' alt='' />
										<span>2</span>
									</div>
									<h4 className='appie-title'>Place an order</h4>
									<p>Make an order right in the app.</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div
									className='appie-single-service text-center mt-30 item-3 wow animated fadeInUp'
									data-wow-duration='2000ms'
									data-wow-delay='600ms'
								>
									<div className='icon'>
										<img src='assets/images/icon/food-delivery.png' alt='' />
										<span>3</span>
									</div>
									<h4 className='appie-title'>We deliver</h4>
									<p>Your order is processed and delivered to your location.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='appie-features-area pt-100 pb-50' id='features'>
					<div className='container' id='about'>
						<div className='row align-items-center'>
							<div className='col-lg-9'>
								<div className='tab-content' id='v-pills-tabContent'>
									<div
										className='tab-pane fade show active'
										id='v-pills-home'
										role='tabpanel'
										aria-labelledby='v-pills-home-tab'
									>
										<div className='row align-items-center'>
											<div className='col-lg-6'>
												<div
													className='appie-features-thumb text-center wow animated fadeInUp'
													data-wow-duration='2000ms'
													data-wow-delay='200ms'
												>
													<img
														src='assets/images/custom/hero-thumb-2.jpg'
														alt=''
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div
													className='appie-features-content wow animated fadeInRight'
													data-wow-duration='2000ms'
													data-wow-delay='600ms'
												>
													<span>Nourri Food</span>
													<h3 className='title'>About us</h3>
													<p></p>
													{/* <a className="animated_btn" href="#">Learn More</a>  */}
												</div>
											</div>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='v-pills-profile'
										role='tabpanel'
										aria-labelledby='v-pills-profile-tab'
									>
										<div className='row align-items-center'>
											<div className='col-lg-6'>
												<div
													className='appie-features-thumb text-center animated fadeInUp'
													data-wow-duration='2000ms'
													data-wow-delay='200ms'
												>
													<img
														src='assets/images/features-thumb-1.png'
														alt=''
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div
													className='appie-features-content animated fadeInRight'
													data-wow-duration='2000ms'
													data-wow-delay='600ms'
												>
													<span>Custom Reacyions</span>
													<h3 className='title'>
														Let the <br /> Conversation flow
													</h3>
													<p>
														Car boot absolutely bladdered posh burke the
														wireless mush some dodg.
													</p>
													<a className='animated_btn' href='#'>
														Learn More
													</a>
												</div>
											</div>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='v-pills-messages'
										role='tabpanel'
										aria-labelledby='v-pills-messages-tab'
									>
										<div className='row align-items-center'>
											<div className='col-lg-6'>
												<div
													className='appie-features-thumb text-center animated fadeInUp'
													data-wow-duration='2000ms'
													data-wow-delay='200ms'
												>
													<img
														src='assets/images/features-thumb-1.png'
														alt=''
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div
													className='appie-features-content animated fadeInRight'
													data-wow-duration='2000ms'
													data-wow-delay='600ms'
												>
													<span>Custom Reacyions</span>
													<h3 className='title'>
														Let the <br /> Conversation flow
													</h3>
													<p>
														Car boot absolutely bladdered posh burke the
														wireless mush some dodg.
													</p>
													<a className='animated_btn' href='#'>
														Learn More
													</a>
												</div>
											</div>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='v-pills-settings'
										role='tabpanel'
										aria-labelledby='v-pills-settings-tab'
									>
										<div className='row align-items-center'>
											<div className='col-lg-6'>
												<div
													className='appie-features-thumb text-center animated fadeInUp'
													data-wow-duration='2000ms'
													data-wow-delay='200ms'
												>
													<img
														src='assets/images/features-thumb-1.png'
														alt=''
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div
													className='appie-features-content animated fadeInRight'
													data-wow-duration='2000ms'
													data-wow-delay='600ms'
												>
													<span>Custom Reacyions</span>
													<h3 className='title'>
														Let the <br /> Conversation flow
													</h3>
													<p>
														Car boot absolutely bladdered posh burke the
														wireless mush some dodg.
													</p>
													<a className='animated_btn' href='#'>
														Learn More
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='features-shape-1'>
						<img src='assets/images/shape/shape-6.png' alt='' />
					</div>
					<div className='features-shape-2'>
						<img src='assets/images/shape/shape-7.png' alt='' />
					</div>
					<div className='features-shape-3'>
						<img src='assets/images/shape/shape-8.png' alt='' />
					</div>
				</section>

				<section className='appie-faq-area pt-50 pb-95' id='faq'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='appie-section-title text-center'>
									<h3 className='appie-title'>Frequently asked questions</h3>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6'>
								<div
									className='faq-accordion wow fadeInRight mt-30'
									data-wow-duration='1500ms'
								>
									<div
										className='accrodion-grp wow fadeIn'
										data-wow-duration='1500ms'
										data-grp-name='faq-accrodion'
									>
										<div className='accrodion active '>
											<div className='accrodion-inner'>
												<div className='accrodion-title'>
													<h4>What payment options do we accept?</h4>
												</div>
												<div className='accrodion-content'>
													<div className='inner'>
														<p>
															<ul>
																<li>Online payments via debit cards</li>
																<li>Pay on delivery</li>
																<li>Pay via USSD(coming soon)</li>
															</ul>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className='accrodion  '>
											<div className='accrodion-inner'>
												<div className='accrodion-title'>
													<h4>What cities does Nourri cover?</h4>
												</div>
												<div className='accrodion-content'>
													<div className='inner'>
														<p>
															Currently Nourri operates in the city of Port
															Harcourt. We are working on expanding our service
															areas, anticipate Nourri near you soon.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div
									className='faq-accordion wow fadeInRight mt-30'
									data-wow-duration='1500ms'
								>
									<div
										className='accrodion-grp wow fadeIn'
										data-wow-duration='1500ms'
										data-grp-name='faq-accrodion'
									>
										<div className='accrodion '>
											<div className='accrodion-inner'>
												<div className='accrodion-title'>
													<h4>
														How do I add my restaurant/food business on Nourri?
													</h4>
												</div>
												<div className='accrodion-content'>
													<div className='inner'>
														<p>
															kindly send us an email- support@nourrifd.com.
														</p>
														<p>or call us on 08179618760.</p>
													</div>
												</div>
											</div>
										</div>
										<div className='accrodion  '>
											<div className='accrodion-inner'>
												<div className='accrodion-title'>
													<h4>
														What type of food business does Nourri support?
													</h4>
												</div>
												<div className='accrodion-content'>
													<div className='inner'>
														<p>
															We onboard restaurants, cafes & independent food
															vendors. Nourri is a startup friendly company and
															we wish to partner and help you grow.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='faq-text text-center pt-40'>
									<p>
										Can't find an answer?{' '}
										<a href='mailto:support@nourrifd.com'>Email us</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='appie-project-area pt-30 pb-100'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div
									className='appie-project-box wow animated slideInUp'
									data-wow-duration='1000ms'
									data-wow-delay='0ms'
								>
									<div className='row'>
										<div className='col-lg-6'>
											<div className='appie-project-content'>
												<h3 className='title'>
													Subscribe for offers and promotions.
												</h3>
												<form action='#'>
													<div className='input-box mt-30'>
														<input type='text' placeholder='Your email' />
														<button>Subscribe</button>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div className='appie-project-thumb'>
										{/* <img src="assets/images/project-thumb.png" alt=""> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='appie-footer-area' id='contact'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-4 col-md-6'>
								<div className='footer-about-widget'>
									<div className='logo'>
										<a href='#'>
											<img src='assets/images/nourri.png' alt='' />
										</a>
									</div>
									<a href='#'>
										Read More <i className='fal fa-arrow-right'></i>
									</a>{' '}
									-->
									<div className='social mt-30'>
										<ul>
											<li>
												<a href='https://facebook.com/nourrifd'>
													<i className='fab fa-facebook-f'></i>
												</a>
											</li>
											<li>
												<a href='https://twitter.com/nourrifd'>
													<i className='fab fa-twitter'></i>
												</a>
											</li>
											<li>
												<a href='https://instagram.com/nourrifd'>
													<i className='fab fa-instagram'></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-6'>
								<div className='footer-navigation'></div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='footer-navigation'>
									<ul>
										<li>
											<a href='#about'>About</a>
										</li>
										<li>
											<a href='/policy.html'>Privacy policy</a>
										</li>
										<li>
											<a href='#faq'>Faqs</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='footer-widget-info'>
									<h4 className='title'>Get In Touch</h4>
									<ul>
										<li>
											<a href='#'>
												<i className='fal fa-envelope'></i> support@nourrifd.com
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fal fa-phone'></i> 08179618760
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fal fa-map-marker-alt'></i> #20 Igbodo
												street, Old GRA, PH.
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='footer-copyright d-flex align-items-center justify-content-between pt-35'>
									<div className='apps-download-btn'>
										<ul>
											<li>
												<a href='#'>
													<i className='fab fa-apple'></i> Download for iOS
												</a>
											</li>
											<li>
												<a className='item-2' href='#'>
													<i className='fab fa-google-play'></i> Download for
													Android
												</a>
											</li>
										</ul>
									</div>
									<div className='copyright-text'>
										<p>Copyright © 2021 Appie. All rights reserved.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className='back-to-top'>
					<a href='#'>
						<i className='fal fa-arrow-up'></i>
					</a>
				</div>
			</body>
		</div>
	);
}
