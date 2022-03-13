import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { getWordOfTheDay } from "../word-util/util";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1>
				Today's Word of the Day:{" "}
				<span className={styles.wotd}>{getWordOfTheDay().toUpperCase()}</span>
			</h1>
		</div>
	);
};

export default Home;
