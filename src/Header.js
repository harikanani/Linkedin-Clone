import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
	const dispatch = useDispatch();
	const logoutOfApp = () => {
		console.log("logout");
		dispatch(logout());
		auth.signOut();
	};
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://img.icons8.com/color/48/000000/linkedin.png"
					alt="linkedin"
				/>
				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Home" />
				<HeaderOption Icon={ChatIcon} title="My Network" />
				<HeaderOption Icon={NotificationsIcon} title="Home" />
				<HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
			</div>
		</div>
	);
};

export default Header;
