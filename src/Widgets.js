import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>

			{newsArticle("HarryKanani is back", "Top news - 9999 readers")}
			{newsArticle("Amazon is hiring interns", "Top news - 5999 readers")}
			{newsArticle(
				"React 18 in Beta Version",
				"Technologies - 8999 readers",
			)}
			{newsArticle("A Game changer of Netflix", "OTT - 899 readers")}
			{newsArticle("Bitcoin Breaks $22k", "Crypto - 6976 readers")}
			{newsArticle("Tesla hits new hights", "Cars & auto - 366 readers")}
		</div>
	);
};

export default Widgets;
