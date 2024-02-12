const HeroSection = () => {
    return (  
        <div className="ban-ner">
            {/* <div className="header-fix-bg"></div> */}
            <div className="inner-img">
                <div className="container pt-[65px]">
                    <div className="inner-text md:pt-0 pt-[3.75rem]">
                        <img src={'/SuperAI-Week-Logo.png'} className="desktop" alt="Banner"/>
                        <img src={'/SuperAI-Week-Logo-Stacked.png'} className="mobile" />
                        <p>03 - 09 June 2024 <span className="dxtop">&middot; Mariana bay sands, SINGAPORE</span> </p>
                        <div className="own-event">

                            <p className="Drinks">

                            The year&apos;s widest range of meetups, workshops, networking drinks and parties - creating unparalleled networking opportunities.           
                            </p>

                            <p className="updts">
                            Watch this space for continuous updates, and join the conversation
                            <br/>
                            by using <b>#SuperAIWeek</b> on Twitter.
                            </p>
                            <div className="own-evnt-btn d-flex">
                            <a className="cursor-pointer" href="https://docs.google.com/spreadsheets/d/15HfYTVsDAixDVG2cgkWamxXIPHL5ATR7NdnKzvnwT18/edit?usp=sharing"
                                target="__blank">
                                <button className="min-w-[239px] hst-own cursor-pointer">SIDE EVENTS SHEET</button>
                            </a>
                            <a href="https://forms.superai.com/singapore-ai-week-event-submission" target="_blank">
                                <button className="min-w-[239px] side-evnt">HOST YOUR OWN EVENT</button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;