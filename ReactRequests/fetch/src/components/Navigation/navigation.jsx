import "./navigation.css";
function Navigation() {
	let url = "https://fakestoreapi.com/products";
	function showStore() {}
	return (
		<>
			<nav>
				<ul className="navigation">
					<li
						onClick={() => {
							showStore();
						}}
					>
						Інтернет магазин
					</li>
					<li>Список справ</li>
					<li>Планети</li>
					<li>Планети</li>
					<li>Планети</li>
					<li>Планети</li>
				</ul>
			</nav>
		</>
	);
}
export default Navigation;
