import { MainPage } from "./main/main.page";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import { InfoPage } from "./info/info.page";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path="/info/:id" element={<InfoPage />} />
						<Route path="/" element={<MainPage />} />
						<Route path="*" element={<MainPage />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}

export default App;
