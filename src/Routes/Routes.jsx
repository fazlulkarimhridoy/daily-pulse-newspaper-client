import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AllArticles from "../Pages/AllArticles/AllArticles/AllArticles";
import AddArticles from "../Pages/AddArticles/AddArticles";
import PendingArticles from "../Pages/PendingArticles/PendingArticles";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import MyArticles from "../Pages/MyArticles/MyArticles";
import UpdateArticle from "../Pages/UpdateArticle/UpdateArticle";
import ArticleDetails from "../Pages/AllArticles/ArticleDetails/ArticleDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>
      },
      {
        path: "/addArticles",
        element: <AddArticles></AddArticles>
      },
      {
        path: "/pendingArticles",
        element: <PendingArticles></PendingArticles>
      },
      {
        path: "/premiumArticles",
        element: <PremiumArticles></PremiumArticles>
      },
      {
        path: "/myArticles",
        element: <MyArticles></MyArticles>
      },
      {
        path: "/updateArticle/:id",
        element: <UpdateArticle></UpdateArticle>,
        loader: ({params})=> fetch(`http://localhost:5000/article/${params.id}`)
      },
      {
        path: "/articleDetails/:id",
        element: <ArticleDetails></ArticleDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/article/${params.id}`)
      }
    ]
  },
]);