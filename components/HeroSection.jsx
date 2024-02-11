const HeroSection = () => {
    return (  
        <div className="ban-ner">
            <div className="header-fix-bg"></div>
            <div className="inner-img">
                <div className="container">
                    <div className="inner-text">
                        <img src={'/TOKEN2049-Week-Logo.png'} className="desktop" alt="Banner"/>
                        <img src={'/TOKEN2049-Week-Logo-Stacked.png'} className="mobile" />
                        <p>03 - 09 June 2024 &middot; <span className="dxtop">Mariana bay sands, SINGAPORE</span> </p>
                        <div className="own-event">

                            <p className="Drinks">

                            The year&apos;s widest range of meetups, workshops, networking drinks and parties - creating unparalleled networking opportunities.           
                            </p>

                            <p className="updts">
                            Watch this space for continuous updates, and join the conversation
                            <br/>
                            by using <b>#TOKEN2049Week</b> on Twitter.
                            </p>
                            <div className="own-evnt-btn d-flex">
                            <a className="cursor-pointer" href="https://docs.google.com/spreadsheets/d/1_mUbQe7AjxHMdXzb2rySYgb5YPA2-o8dZN1nAHCICto/edit#gid=0"
                                target="__blank">
                                <button className="min-w-[239px] hst-own cursor-pointer">SIDE EVENTS SHEET</button>
                            </a>
                            <a href="https://forms.token2049.com/token2049-week-event-submission" target="_blank">
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