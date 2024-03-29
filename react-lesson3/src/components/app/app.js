import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Alex", salary: 800, increase: false, rise: false, id: 1 },
				{ name: "Bob", salary: 1500, increase: true, rise: true, id: 2 },
				{
					name: "Cristine",
					salary: 3000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
			term: "",
			filter: "all",
		};
		this.maxId = 4;
	}

	deleteItem = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};
		if (newItem.name.length > 3) {
			this.setState(({ data }) => {
				const newArr = [...data, newItem];
				return {
					data: newArr,
				};
			});
		}
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	onUpdateSearch = term => {
		this.setState({ term });
	};

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		});
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter(item => item.rise);
			case "moreThan1000":
				return items.filter(item => item.salary > 1000);
			case "increase":
				return items.filter(item => item.increase);
			default:
				return items;
		}
	};

	onFilterSelect = filter => {
		this.setState({ filter });
	};

	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
