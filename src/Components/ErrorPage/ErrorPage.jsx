import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h3>Error page. Nothing found</h3>
            <Link to="/">Go to home</Link>
        </div>
    );
};

export default ErrorPage;