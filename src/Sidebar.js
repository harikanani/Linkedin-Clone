import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
const Sidebar = () => {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className="sidebar__reCentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
					alt=""
				/>
				<Avatar
					// src="https://avatars.githubusercontent.com/u/54361799?v=4"
					src={user.photoURL}
					className="sidebar__avatar">
					{user.email[0].toUpperCase()}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who Viewed you</p>
					<p className="sidebar__statNumber">2,500</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">5,000</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("nodejs")}
				{recentItem("expressjs")}
				{recentItem("flask")}
				{recentItem("flutter")}
				{recentItem("mongodb")}
				{recentItem("python")}
			</div>
		</div>
	);
};

export default Sidebar;
