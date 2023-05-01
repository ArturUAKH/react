import { useState } from "react";
import req from "../../Req";
import "./navigation.css";
function Navigation() {
	let url = "https://fakestoreapi.com/products";
	let [storeData, setStoreData] = useState();
	function showStore() {
		req(url).then((data) => setStoreData(data));
	}
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
			<section>
				{Array.isArray(storeData)
					? storeData.map((el) => {
							return <div>{el.title}</div>;
					  })
					: "error"}
			</section>
		</>
	);
}
export default Navigation;
