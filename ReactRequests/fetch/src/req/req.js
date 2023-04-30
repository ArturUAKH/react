const req = async (url) => {
	const req2 = await fetch(url);
	const data = await req2.json();
	return data;
};
export { req };
