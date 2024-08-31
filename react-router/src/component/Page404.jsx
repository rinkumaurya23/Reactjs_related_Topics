import { Link } from "react-router-dom";

const Page404=()=>{
    return (
        <>
            <div>
                <h1>404 page</h1>
                <p>This page is not url found </p>
                <Link to="/"> GoTo Home</Link>
            </div>
        </>
    )
}
export default Page404;