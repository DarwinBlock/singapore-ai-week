const Footer = () => {
	return (
		<>
			<footer className="bg bg-black flex justify-center">
				<div className="flex lg:flex-row flex-col w-full max-w-[1920px] justify-between px-6 md:px-16 xl:px-24 2xl:px-32 py-10">
					<div className="flex lg:justify-normal justify-between">
						<a className="lg:block hidden" href="https://www.superai.com/">
							<img className="lg:block hidden" width={300} src="/superai_footer.png" alt="SuperAI" />
						</a>
						<div className="flex flex-col md:text-base text-sm font-lassrietL space-y-[8px] lg:ml-16">
							<a href="https://www.superai.com/speakers" target="blank" className="uppercase no-underline text-white text-[18px] font-extralight">
								Speakers
							</a>
							<a href="https://www.superai.com/agenda" target="blank" className="uppercase no-underline text-white text-[18px] font-extralight">
								AGENDA
							</a>
							<a href="https://www.superai.com/partners" target="blank" className="uppercase no-underline text-white text-[18px] font-extralight">
								PARTNERS
							</a>
							<a href="https://www.superai.com/genesis" target="blank" className="uppercase no-underline text-white text-[18px] font-extralight">
								GENESIS
							</a>
							<a href="https://www.superai.com/travel" target="blank" className="uppercase no-underline text-white text-[18px] font-extralight">
								TRAVEL
							</a>
							<a href="https://www.superai.com/about" target="blank" className="uppercase no-underline text-white text-[18px] font-extralight">
								OUR EVENTS
							</a>
							<a
								href="https://superaiconf.notion.site/Work-at-SuperAI-2161f1bb872a474b9cc60efad42d8fb9"
								target="blank"
								className="uppercase no-underline text-white text-[18px] font-extralight"
							>
								CAREERS
							</a>
						</div>

						<div className="font-lassriet md:text-base text-sm space-y-1 flex flex-col ml-auto md:ml-32">
							<p className="text-[#715fe9] mb-1">CONTACT US</p>
							<a href="mailto:info@superai.com" className="font-lassriet font-[17px] no-underline text-white">
								info@superai.com
							</a>
							<a href="mailto:sponsors@superai.com" className="font-lassriet font-[17px] no-underline text-white">
								sponsors@superai.com
							</a>
							<a href="mailto:speakers@superai.com" className="font-lassriet font-[17px] no-underline text-white">
								speakers@superai.com
							</a>
						</div>
					</div>

					<div className="flex flex-col lg:mt-0 mt-16">
						<div className="flex font-lassrietL">
							<a href="https://www.superai.com/partners" target="_blank">
								<button className="text-white cta-exhibit-btn hover:bg-[#3f2aa4] border border-white  px-[1.95rem] py-[10px] rounded-xl">
									EXHIBIT
								</button>
							</a>
							<a href="https://www.superai.com/tickets" target="_blank">
								<button className="text-white cta-tickets-btn ml-4 px-[1.95rem] py-[10px] rounded-xl">TICKETS</button>
							</a>
						</div>

						<a className="lg:hidden block" href="https://www.superai.com/">
							<img className="lg:hidden block lg:mt-0 mt-6" width={180} src="/superai_footer.png" alt="SuperAI" />
						</a>

						<div className="flex space-x-5 lg:self-end lg:mt-auto mt-6">
							<a href="https://www.linkedin.com/company/superai-conference/" target="blank">
								<i className="text-[32px] text-center text-white fa-brands fa-linkedin-in"></i>
							</a>

							<a href="https://twitter.com/superai_conf" target="blank">
								<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
									<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
								</svg>
							</a>

							<a href="https://www.youtube.com/@superai_conf" target="blank">
								<i className="text-white text-[32px] fa-brands fa-youtube"></i>
							</a>

							<a href="http://facebook.com/superai.conf" target="blank">
								<i className="text-white text-[32px] fa-brands fa-facebook"></i>
							</a>
							<a href="https://join.slack.com/t/superaiofficial/shared_invite/zt-2b8waixnq-1H09r_GhwqoZDrEtGlLfqQ" target="blank">
								<i className="text-white text-[32px] fa-brands fa-slack"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
			<div className="w-full bg-[#4224A2] flex justify-center">
				<div className="w-full max-w-[1920px] flex sm:flex-row flex-col justify-between px-6 md:px-16 xl:px-24 2xl:px-32 pt-3 pb-8 sm:pb-16">
					<div className="flex text-sm md:text-lg sm:mb-0 mb-6">
						<a target="_blank" href="https://www.superai.com/terms-and-conditions" className="no-underline text-white font-lassriet">
							Terms and Conditions
						</a>
						<a target="_blank" href="https://www.superai.com/privacy-policy" className="no-underline text-white font-lassriet ml-4 md:ml-10">
							Privacy Policy
						</a>
					</div>
					<p className="font-lassrietL text-white text-sm md:text-lg">All Rights Reserved, SuperAI 2024</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
