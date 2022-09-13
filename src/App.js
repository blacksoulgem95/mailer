import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Variables from "./pages/Variables";

export default function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/variables" element={<Variables />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
