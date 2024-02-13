const NewsLetter = () => {
    return (  
        <div className="alldata subs_section">
            <div className="subs row" style={{padding: 0, background: "none", minHeight: "none !important"}}>
                <div className="w-full md:p-0 py-8 px-[20px] relative md:flex-row  flex-col flex  md:items-center md:justify-center h-full  bg-[#EBEAEA]">
                    <p className="leading-tight font-lassrietL max-w-sm md:max-w-xs text-2xl lg:text-[35px] md:mr-10 md:px-0 sm:px-16 px-6">Subscribe for the latest event updates</p>
                    <div className="relative md:block flex flex-col md:px-0 sm:px-16 px-6">
                        <input className="bg-white border-none rounded-[22px] font-lassrietL px-3 md:max-w-none max-w-md md:w-[440px] outline-none py-[18px]" placeholder="name@email.com"></input>
                            <a className="" href="https://superai.us14.list-manage.com/subscribe/post?u=bcae48fc20de0ec8abc1a4d5f&id=82a8dd74fe&f_id=001a9ee0f0" target="_blank">
                                <button
                                    className="bg-gradient-to-r newsletter-get-updates-btn hidden md:block absolute top-[50%] translate-y-[-50%] right-2 from-[#8072d6] to-[#28188d] uppercase text-white rounded-[18px] py-[12px] px-[32px]"
                                >
                                    Get Updates
                                </button>
                            </a>
                            <a
                                href="https://superai.us14.list-manage.com/subscribe/post?u=bcae48fc20de0ec8abc1a4d5f&id=82a8dd74fe&f_id=001a9ee0f0"
                                target="_blank"
                            >
                                <button
                                    className="max-w-fit mt-3 bg-gradient-to-r md:hidden from-[#8072d6] to-[#28188d] uppercase text-white rounded-[18px] py-[12px] px-[32px]"
                                >
                                    Get Updates
                                </button>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewsLetter;