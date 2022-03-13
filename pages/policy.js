import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
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
			</Head>
			<body>
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
												<Link href="/policy">
													<a>Privacy policy</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<br />
				<br />
				<br />
				<section id='about' className='about'>
					<div className='container'>
						<div className='row content'>
							<br />
							<br />
							<br />
							<div>
								<h2>Privacy Policy of Nourri Foods & Drinks Ltd</h2>
							</div>
							<br />
							<br />
							<div>
								<p>
									Nourri Foods & Drinks Ltd is duly registered with the
									Corporate Affairs Commission of Nigeria, and is the provider
									of this app. This page is used to inform our customers,
									companies and visitors about our policies with the collection,
									use, maintenance and disclosure of Personal Information if
									anyone decides to use our app. If you choose to use our app,
									then you agree to the collection and use of information in
									relation with this policy. The Personal Information that we
									collect are used for providing and improving the app. We will
									not use or share your information with anyone except as
									described in this Privacy Policy.
								</p>
								<p>
									The terms used in this Privacy Policy have the same meanings
									as in general usage, unless otherwise defined in this Privacy
									Policy. Information Collection and Use For a better experience
									while using our application, we may require you to provide us
									with certain personally identifiable information, including
									but not limited to your name, phone number, email address and
									postal address. This information is obtained in a variety of
									ways, including, but not limited to, when Users visit our app,
									register on the app, place an order, fill out a form. The
									information that we collect will be used to contact or
									identify you. We will collect personal identification
									information from Users only if they voluntarily submit such
									information to us. Users can always refuse to supply
									personally identification information, except that it may
									prevent them from engaging in certain app related activities.
									Log Data.
								</p>
								<p>
									We want to inform you that whenever you visit our Service, we
									collect information that your browser sends to us that is
									called Log Data. This Log Data may include information such as
									your computer’s Internet Protocol (&quot;IP&quot;) address,
									browser version, pages of our Service that you visit, the time
									and date of your visit, the time spent on those pages, and
									other statistics.
								</p>
								<p>
									<h4>Cookies</h4>
									Cookies are files with small amount of data that is commonly
									used as anonymous unique identifier. These are sent to your
									browser from the website that you visit and are stored on your
									computer’s hard drive. Our website uses these
									&quot;cookies&quot; to collect information and to improve
									our Service. You have the option to either accept or refuse
									these cookies, and know when a cookie is being sent to your
									computer. If you choose to refuse our cookies, you may not be
									able to use some portions of our Service.
								</p>
								<p>
									<h4>Service Providers</h4>
									We may employ third-party companies and individuals due to the
									following reasons:
									<ul>
										<li>To facilitate our app;</li>
										<li>To perform Service-related services; or</li>
										<li>To assist us in analyzing how our app is used.</li>
									</ul>
									We want to inform our app users that these third parties have
									access to your Personal Information. The reason is to perform
									the tasks assigned to them on our behalf. However, they are
									obligated not to disclose or use the information for any other
									purpose. Security
								</p>
								<p>
									We value your trust in providing us your Personal Information,
									thus we are striving to use commercially acceptable means of
									protecting it. But remember that no method of transmission
									over the internet, or method of electronic storage is 100%
									secure and reliable, and we cannot guarantee its absolute
									security. We adopt appropriate data collection, storage and
									processing practices and security measures to protect against
									unauthorized access, alteration, disclosure or destruction of
									your personal information, username, password, transaction
									information and data stored on our Site.
								</p>
							</div>
						</div>
					</div>
				</section>
				<br />
				<br />
				<br />
				
			</body>
		</>
	);
}
