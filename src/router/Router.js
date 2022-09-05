import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Main from "../pages/Main";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" element={<Main/>}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;