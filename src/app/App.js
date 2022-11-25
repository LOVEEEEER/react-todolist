import React from "react";
import { useRoutes } from "react-router-dom";
import AppLoader from "./components/ui/hoc/AppLoader";
import routes from "./routes";

function App() {
    const elements = useRoutes(routes);
    return <AppLoader>{elements}</AppLoader>;
}

export default App;
