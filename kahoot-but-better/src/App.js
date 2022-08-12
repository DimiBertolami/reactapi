import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Settings from "./pages/settings";
import Questions from "./pages/questions";
import Finalscreen from "./pages/finalscreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system"

function App() {
  return (
    <Router>
        <Container maxWidth="sm">
            <Box textAlign="center" mt={5}>
                <Routes>
                    <Route path="/settings" exact>
                        <Typography
                            variant="h2"
                            fontweight="bold">Quiz App!
                        </Typography>
                        <Settings />
                    </Route>
                    <Route path="/questions">
                        <Questions />
                    </Route>
                    <Route path="/score">
                        <Finalscreen />
                    </Route>
                </Routes>
            </Box>
        </Container>
    </Router>
  );
}

export default App;
