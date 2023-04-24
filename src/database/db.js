import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("self_post2.db");

export class DB {
	init = async () => {
		console.log("init");
		return await new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL,image TEXT,date TEXT,booked INT)",
					[],
					resolve,
					(_, error) => reject(error)
				);
			});
		});
	};

	getPosts = async () => {
		return await new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT * from posts ORDER BY date ASC",
					[],
					(_, result) => resolve(result.rows._array),
					(_, error) => reject(error)
				);
			});
		});
	};

	addPost = async ({ title, date, booked, image }) => {
		return await new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					`INSERT INTO posts (title, image, date, booked) VALUES (?, ?, ?, ?)`,
					[title, image, date, booked],
					(_, result) => resolve(result),
					(_, error) => reject(error)
				);
			});
		});
	};
}
