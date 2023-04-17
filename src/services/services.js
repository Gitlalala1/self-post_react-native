export default class Services {
	DATA = [
		{
			id: "1",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "BomBam lala",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "2",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "lolal treit tu",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "3",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "kolachamber lala",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "4",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "rum rum rara",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "5",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "popop papapa",
			date: new Date().toJSON(),
			booked: false,
		},
	];

	getPosts = async () => {
		const res = new Promise((resolve, reject) => {
			setTimeout(() => resolve(this.DATA), 1000);
		});
		return await res;
	};
}
