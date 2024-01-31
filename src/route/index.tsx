import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { FavoritePage } from "../pages/favorite";
import { routePaths } from "./routes";

export function AppRoutes(){

    return (
        <Routes>
            <Route path={routePaths.home} element={<HomePage/>} />
            <Route path={routePaths.fav} element={<FavoritePage/>} />
        </Routes>
    )
}