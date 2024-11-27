"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(pathname === "/admin");

	useEffect(() => {
		setCollapsed(window.innerWidth < 769 || pathname === "/admin");
		window?.addEventListener("resize", (e) => {
			if (pathname === "/admin") {
				setCollapsed(true);
				return;
			}
			const windowWidth = window?.innerWidth;
			if (windowWidth < 769) setCollapsed(true);
			else setCollapsed(false);
		});
	}, [pathname]);

	const handleLogout = async () => {
		const response = await fetch("/api/auth/logout", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});

		if (!response.ok) {
			throw await response.json();
		}

		const data = await response.json();
		if (data.success) {
			router.push("/auth");
		}
	};

	// window?.addEventListener('resize', (e) => {
	// 	if(pathname === "/admin"){
	// 		setCollapsed(true)
	// 		return;
	// 	}
	// 	const windowWidth = window?.innerWidth;
	// 	if(windowWidth < 769)
	// 		setCollapsed(true);
	// 	else
	// 		setCollapsed(false);
	// })

	useEffect(() => {
		const agenda = document.querySelector(".agenda");
		const agendaSubmenu = document.querySelector(".agendaSubmenu");
		const experience = document.querySelector(".experience");
		const submenu = document.querySelector(".submenu");

		let timeoutId1;
		let timeoutId2;

		const handleAgendaMouseEnter = () => {
			agendaSubmenu.style.display = "flex";
			agendaSubmenu.style.gap = "120px";
			agendaSubmenu.style.justifyContent = "center";
			agendaSubmenu.style.width = "100vw";
			agendaSubmenu.style.marginTop = "-30px";
			clearTimeout(timeoutId1);
		};

		const handleAgendaMouseLeave = () => {
			timeoutId1 = setTimeout(() => {
				agendaSubmenu.style.display = "none";
			}, 2000);
		};

		const handleAgendaSubmenuMouseEnter = () => {
			clearTimeout(timeoutId1);
		};

		const handleAgendaSubmenuMouseLeave = () => {
			agendaSubmenu.style.display = "none";
		};

		const handleExperienceMouseEnter = () => {
			submenu.style.display = "flex";
			submenu.style.gap = "170px";
			submenu.style.justifyContent = "center";
			submenu.style.width = "100vw";
			submenu.style.marginTop = "-30px";
			clearTimeout(timeoutId2);
		};

		const handleExperienceMouseLeave = () => {
			timeoutId2 = setTimeout(() => {
				submenu.style.display = "none";
			}, 2000);
		};

		const handleSubmenuMouseEnter = () => {
			clearTimeout(timeoutId2);
		};

		const handleSubmenuMouseLeave = () => {
			submenu.style.display = "none";
		};

		// agenda.addEventListener("mouseenter", handleAgendaMouseEnter);
		// agenda.addEventListener("mouseleave", handleAgendaMouseLeave);
		// agendaSubmenu.addEventListener("mouseenter", handleAgendaSubmenuMouseEnter);
		// agendaSubmenu.addEventListener("mouseleave", handleAgendaSubmenuMouseLeave);
		experience.addEventListener("mouseenter", handleExperienceMouseEnter);
		experience.addEventListener("mouseleave", handleExperienceMouseLeave);
		submenu.addEventListener("mouseenter", handleSubmenuMouseEnter);
		submenu.addEventListener("mouseleave", handleSubmenuMouseLeave);

		// Cleanup function to remove event listeners when the component is unmounted
		return () => {
			// agenda.removeEventListener("mouseenter", handleAgendaMouseEnter);
			// agenda.removeEventListener("mouseleave", handleAgendaMouseLeave);
			// agendaSubmenu.removeEventListener("mouseenter", handleAgendaSubmenuMouseEnter);
			// agendaSubmenu.removeEventListener("mouseleave", handleAgendaSubmenuMouseLeave);
			experience.removeEventListener("mouseenter", handleExperienceMouseEnter);
			experience.removeEventListener("mouseleave", handleExperienceMouseLeave);
			submenu.removeEventListener("mouseenter", handleSubmenuMouseEnter);
			submenu.removeEventListener("mouseleave", handleSubmenuMouseLeave);
		};
	}, []);

	return (
		<header className="header navbar-expand-lg navbar-font" tw="exclude">
			<div className="t-global p-0">
				{/* <div className="container-lg">
        <a href="http://www.token2049.com/"><span className="arrow">← </span>TOKEN2049 GLOBAL</a>
      </div> */}
			</div>
			<div className="main pb-[28px] pt-[35px]" style={{ justifyContent: "center" }}>
				<div className="container-lg m-0 w-full nav-container-wrapper" style={{ maxWidth: "1277px", padding: "0" }}>
					<div className="menu_dv">
						<div className="header-left" style={{ width: "auto", paddingLeft: 0 }}>
							<a href="https://www.superai.com">
								<img className="w-[220px] h-[38px]" src="/SuperAI-nav-logo.png" width={220} height={38} alt="SuperAI" />
							</a>
						</div>

						<button
							onClick={() => setCollapsed((prev) => !prev)}
							className="navbar-toggler collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon mr-4">
								{collapsed ? (
									<i className="fa fa-bars" aria-hidden="true">
										<img className="burger-button invert mt-1" src="/menu-bar.png" />
									</i>
								) : (
									<img className="close-burger-btn w-[20px] h-[20px] invert" width={20} src="/close-icon.svg" />
								)}
							</span>
						</button>

						<div className={"header-right navbar-collapse md:block hidden " + (collapsed ? "collapse" : "")} id="navbarSupportedContent">
							<ul className="navbar-nav">
								{/* <li className="nav-item onlymb">
									<a href="https://www.superai.com/tickets" className="nav-link">
										TICKETS
									</a>
								</li> */}
								<li className="nav-item">
									<a href="https://www.superai.com/speakers" className="nav-link font-normal">
										SPEAKERS
									</a>
								</li>
								{/* <li className="nav-item lg:ml-[45px] agenda">
									<span class="nav-link">AGENDA</span>
								</li> */}

								<li className="nav-item lg:ml-[45px]">
									<a href="https://www.superai.com/partners" className="nav-link font-normal">
										PARTNERS
									</a>
								</li>
								<li className="nav-item lg:ml-[45px]">
									<a href="https://www.superai.com/genesis" className="nav-link whitespace-nowrap font-normal">
										GENESIS
									</a>
								</li>
								<li className="nav-item lg:ml-[45px] experience">
									<span class="nav-link font-normal">EXPERIENCE</span>
								</li>
								<li className="nav-item lg:ml-[45px]">
									<a href="https://www.superai.com/2024-report" className="nav-link whitespace-nowrap font-normal">
										2024 REPORT
									</a>
								</li>

								<li className="nav-item lg:ml-[45px]">{/* <a href="https://www.superai.com/travel" className="nav-link">SIDE EVENTS</a> */}</li>
								<div className="nav-item exhibt heder_btn">
									<a
										href="https://www.superai.com/partners"
										className="btn nav-link bg-transparent hover:bg-transparent border-2 border-white hover:border-[#A295E0] text-white hover:text-[#A295E0]"
									>
										EXHIBIT
									</a>
									<a href="https://www.superai.com/tickets" className="btn bttn nav-link" style={{ border: "none", lineHeight: "1.7" }}>
										TICKETS
									</a>
								</div>
							</ul>
						</div>

						{!collapsed ? (
							<div id="hamburger-overlay" className="md:hidden block">
								<div class="navbar-navs">
									<span class="nav-item">
										<a href="https://www.superai.com/speakers" class="nav-link-ham">
											SPEAKERS
										</a>
									</span>

									{/* <span class="nav-item">
										<a href="https://www.superai.com/agenda" class="nav-link-ham">
											AGENDA
										</a>
									</span> */}
									<span class="nav-item">
										<a href="https://www.superai.com/partners" class="nav-link-ham">
											PARTNERS
										</a>
									</span>
									<span class="nav-item">
										<a href="https://www.superai.com/genesis" class="nav-link-ham">
											STARTUPS
										</a>
									</span>
									<span class="nav-item">
										<a href="https://www.superai.com/travel" class="nav-link-ham">
											TRAVEL
										</a>
									</span>
									{/* <span class="nav-item">
										<a href="https://www.superai.com/mobileapp" class="nav-link-ham">
											MOBILE APP
										</a>
									</span> */}
									<span class="nav-item">
										<a href="https://sgaiweek.com" class="nav-link-ham">
											SINGAPORE AI WEEK
										</a>
									</span>
									<span class="nav-item">
										<a href="https://pfp.superai.com" class="nav-link-ham">
											I&apos;M ATTENDING
										</a>
									</span>

									<div class="ham-btns">
										<a href="https://www.superai.com/partners" class="ham-btn">
											EXHIBIT
										</a>
										<a href="https://www.superai.com/tickets" class="ham-btn-tickets">
											TICKETS
										</a>
									</div>

									<div id="social-btn-container" class="social-btn-container">
										<a
											href="https://www.linkedin.com/company/superai-conference"
											target="_blank"
											rel="noopener noreferrer"
											class="social-btn-ham"
										>
											<img src="./linkedin.webp" width="32" className="ham-img" />
										</a>

										<a href="https://x.com/superai_conf" target="_blank" rel="noopener noreferrer" class="social-btn-ham">
											<img src="./x.webp" width="32" className="ham-img" />
										</a>

										<a href="https://www.youtube.com/@superai_conf" target="_blank" rel="noopener noreferrer" class="social-btn-ham">
											<img src="./youtube.webp" width="32" className="ham-img" />
										</a>

										<a
											href="https://join.slack.com/t/superaiofficial/shared_invite/zt-2b8waixnq-1H09r_GhwqoZDrEtGlLfqQ"
											target="_blank"
											rel="noopener noreferrer"
											class="social-btn-ham"
										>
											<img src="./slack.webp" width="32" className="ham-img" />
										</a>
									</div>

									<div class="ham-logo-container">
										<a href="https://www.superai.com">
											<img src="./superai-ham.webp" width="55%" />
										</a>
									</div>
								</div>
							</div>
						) : null}

						{pathname === "/admin" && (
							<div
								onClick={() => handleLogout()}
								className="flex items-center justify-center px-10 py-2 text-base font-semibold rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer"
							>
								Logout
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="p-1 bg-transparent">
				<div className="agendaSubmenu">
					<a href="https://www.superai.com/agenda" class="agendaSubmenu-link">
						IO.NET MAIN STAGE
					</a>
					<a href="https://www.superai.com/motiff-stage" class="agendaSubmenu-link">
						MOTIFF STAGE
					</a>
				</div>
			</div>

			<div className="p-1 bg-transparent">
				<div class="submenu">
					<a href="https://www.superai.com/students" class="submenu-link">
						STUDENTS
					</a>
					{/* <a href="https://www.superai.com/mobileapp" class="submenu-link">
						MOBILE APP
					</a> */}
					<a href="https://attending.superai.com" class="submenu-link pfps">
						I&apos;M ATTENDING
					</a>
					<a href="https://www.superai.com/travel" class="submenu-link">
						TRAVEL
					</a>
					<a href="https://sgaiweek.com" class="submenu-link">
						SG AI WEEK
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
