import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = ({rightButtonText, setRightButtonText}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
                <Route path={"/login"} element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
                <Route path={"/cadastro"} element={<SignUpPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
                <Route path={"/post/:id"} element={<PostPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
                <Route path={"*"} element={<h2>Error Page</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router