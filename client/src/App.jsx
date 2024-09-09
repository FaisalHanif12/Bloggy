import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading components and pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Projects = lazy(() => import('./pages/Projects'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const OnlyAdminPrivateRoute = lazy(() => import('./components/OnlyAdminPrivateRoute'));
const CreatePost = lazy(() => import('./pages/CreatePost'));
const UpdatePost = lazy(() => import('./pages/UpdatePost'));
const PostPage = lazy(() => import('./pages/PostPage'));
const Search = lazy(() => import('./pages/Search'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/search' element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
          </Route>
          <Route path='/projects' element={<Projects />} />
          <Route path='/post/:postSlug' element={<PostPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
