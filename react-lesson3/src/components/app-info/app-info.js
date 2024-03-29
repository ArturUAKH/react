import "./app-info.scss";

const AppInfo = ({ employees, increased }) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании SomeCompany</h1>
			<h2>Общее поличество сотрудников - {employees}</h2>
			<h2>Премию получат: {increased}</h2>
		</div>
	);
};

export default AppInfo;
