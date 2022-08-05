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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index path="story" element={<StoryPage />} />
            <Route path="author" element={<AuthorPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="comment" element={<CommentPage />} />
          </Route>
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
