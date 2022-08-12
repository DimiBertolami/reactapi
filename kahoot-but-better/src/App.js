import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                        <Link to="./pages/settings">Home</Link>
                    </li>
                    <li>
                        <Link to="./pages/quetions">Questions</Link>
                    </li>
                    <li>
                        <Link to="./pages/finalscreen">Score</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/Settings">
                    <Settings />
                </Route>
                <Route path="/questions">
                    <Questions />
                </Route>
                <Route path="/Finalscreen">
                    <FinalScreen />
                </Route>
            </Routes>
            </div>
        </Router>
    );
}
function settings(){
    return <h2>Settings</h2>;
}
function quetions(){
    return <h2>Questions</h2>;
}
function finalscreen(){
    return <h2>Final Screen</h2>;
}

export default App;