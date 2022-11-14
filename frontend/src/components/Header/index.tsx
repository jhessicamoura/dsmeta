import icon from "../../assets/img/icon-logo.svg";

import "./styles.css";

function Header() {
	return (
		<>
			<header>
				<div className="dsmeta-logo-container">
					<img src={icon} alt="DsMeta" />
					<h1>DSMeta</h1>
					<p>Desenvolvido por Jhéssica Moura</p>
				</div>
			</header>
		</>
	);
}

export default Header;
