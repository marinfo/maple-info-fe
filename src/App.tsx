import { MainPage } from "./main/main.page";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="*" element={<MainPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
