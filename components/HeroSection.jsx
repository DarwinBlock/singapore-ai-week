const HeroSection = () => {
	return (
		<div className="ban-ner">
			{/* <div className="header-fix-bg"></div> */}
			<div className="inner-img">
				<div className="container pt-[125px]">
					<div className="inner-text md:pt-0 pt-[3.75rem]">
						<img src={"/SuperAI-Week-Logo.png"} className="desktop invert" alt="Banner" />
						<img src={"/SuperAI-Week-Logo-Stacked.png"} className="mobile invert" />
						<p className="text-white">
							3 - 9 June 2025 <span className="dxtop">| SINGAPORE</span>
						</p>
						<div className="own-event">
							<p className="Drinks text-white">
								The year&apos;s widest range of meetups, workshops, networking drinks and parties - creating unparalleled networking
								opportunities.
							</p>

							<p className="updts text-white">
								Watch this space for continuous updates, and join the conversation
								<br />
								by using <b className="text-white">#SingaporeAIWeek</b> on Twitter.
							</p>
							{/* <div className="own-evnt-btn d-flex">
								<a className="w-full cursor-pointer" href="https://forms.superai.com/singapore-ai-week-event-submission" target="_blank">
									<button className="min-w-[279px] side-evnt">HOST YOUR OWN EVENT</button>
								</a>
								<a
									className="w-full cursor-pointer"
									href="https://docs.google.com/spreadsheets/d/15HfYTVsDAixDVG2cgkWamxXIPHL5ATR7NdnKzvnwT18/edit?usp=sharing"
									target="__blank"
								>
									<button id="side-events-btn" className="min-w-[279px] hst-own cursor-pointer side-events-btn">
										SIDE EVENTS SHEET
									</button>
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
