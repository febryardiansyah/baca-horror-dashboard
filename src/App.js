import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from 'react'
import "./App.css";
import AuthorPage from "./pages/author/AuthorPage";
import CommentPage from "./pages/comment/CommentPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/login/LoginPage";
import StoryPage from "./pages/story/StoryPage";
import UserPage from "./pages/user/UserPage";
import { Toaster } from "react-hot-toast";
import NewStoryPage from "./pages/story/NewStoryPage";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.base.user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<LoginPage />} />
          {
            !user ? <Route element={<Navigate to="/login" replace />} /> :
              <Route path="/dashboard/*" element={<DashboardPage />}>
                <Route path="story" element={<StoryPage />} >
                  <Route path="page/:page" element={<StoryPage />} />
                </Route>
                <Route path="story/new" element={<NewStoryPage />} />
                <Route path="author" element={<AuthorPage />} />
                <Route path="user" element={<UserPage />} />
                <Route path="comment" element={<CommentPage />} />
              </Route>
          }
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
