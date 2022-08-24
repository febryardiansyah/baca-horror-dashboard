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
import ViewStoryPage from "./pages/story/ViewStoryPage";
import IndexStory from "./pages/story/IndexStory";
import IndexAuthor from "./pages/author/IndexAuthor";
import NewAuthorPage from "./pages/author/NewAuthorPage";
import EditStoryPage from "./pages/story/EditStoryPage";
import ScrollToTop from "./components/wrapper/ScrollToTop";

function App() {
  const user = useSelector(state => state.base.user)
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route index path="/login" element={<LoginPage />} />
            {
              !user ? <Route element={<Navigate to="/login" replace />} /> :
                <Route path="/dashboard/*" element={<DashboardPage />}>
                  <Route path="story" element={<IndexStory />} >
                    <Route index path="" element={<StoryPage />} />
                    <Route path="page/:page" element={<StoryPage />} />
                    <Route path="new" element={<NewStoryPage />} />
                    <Route path="view/:id" element={<ViewStoryPage />} />
                    <Route path="edit/:id" element={<EditStoryPage />} />
                  </Route>
                  <Route path="author" element={<IndexAuthor />}>
                    <Route index path="" element={<AuthorPage />} />
                    <Route path="new" element={<NewAuthorPage />} />
                  </Route>
                  <Route path="user" element={<UserPage />} />
                  <Route path="comment" element={<CommentPage />} />
                </Route>
            }
            <Route
              path="*"
              element={<Navigate to="/login" replace />}
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
