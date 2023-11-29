import PageLayout from "../components/page-layout";
import "../Styled/settings.css";
import React, { useState } from "react";


const Settings = () => {
	const changePassword = () => {
		return (
			<div className="changePassword">
				<h3>Change Password</h3>
				<div>Password</div>
				<input className="inputPw" />
				<div>Confirm Password</div>
				<input className="inputConfirmPw" />
				<div className="change">
					<button>Change</button>
				</div>
			</div>
		);
	};

	const feedback = () => {
		return (
			<div className="feedback">
				<h3>Give Us Feedback!</h3>
				Header
				<div>
					<input className="inputHeader" />
				</div>
				Message
				<div>
					<input className="inputBody" />
				</div>
				<div className="send">
					<button>Send</button>
				</div>
			</div>
		);
	};

	const support = () => {
		return (
			<div className="support">
				<h3>Need Help?</h3>
				<h5>
					If you have any issues, please contact our help desk at 123-456-7890,
					or email abc.xyz@email.com.
				</h5>
			</div>
		);
	};

	let currentSetting = changePassword();

	const [setting, setSetting] = useState(currentSetting);

	return (
		<>
			<PageLayout>
				<div className="menu-container">
					<div className="menu">
						<div class="menu-header">
							<h2 class="menu-header-title">Theme</h2>
							<div class="theme-switcher">
								<input type="radio" id="light-theme" name="themes" checked />
								<label for="light-theme">
									<span>
										<ion-icon name="sunny"></ion-icon> Light
									</span>
								</label>
								<input type="radio" id="dark-theme" name="themes" />
								<label for="dark-theme">
									<span>
										<ion-icon name="moon"></ion-icon> Dark
									</span>
								</label>
								<span class="slider"></span>
							</div>
						</div>
						<div class="menu-body">
							<button
								className="menuButton"
								onClick={() => setSetting(changePassword)}
							>
								Account Settings
							</button>
							<button
								className="menuButton"
								onClick={() => setSetting(feedback)}
							>
								Give Feedback
							</button>
							<button
								className="menuButton"
								onClick={() => setSetting(support)}
							>
								Support
							</button>
						</div>
					</div>
					<div className="menu-expanded">{setting}</div>
				</div>
			</PageLayout>
		</>
	);
};

export default Settings;
