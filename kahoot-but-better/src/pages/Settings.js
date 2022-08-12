import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import selectField from "../components/selectField";
import TextFieldComp from "../components/textFieldComp";
import useAxios from "../hooks/useAxios";


const Settings = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    const navigate = useNavigate();

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Something Went Wrong!
            </Typography>
        );
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate.push("/questions");
    };

    return (
        <form onSubmit={handleSubmit}>
            <selectField options={response.trivia_categories} label="Category" />
            <selectField options={difficultyOptions} label="Difficulty" />
            <selectField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Get Started
                </Button>
            </Box>
        </form>
    );
};

export default Settings;