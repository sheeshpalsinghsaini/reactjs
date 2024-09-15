import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err.status);
    return(
        <div>
            <h1>oops!!!</h1>
            <p>something Went Wrong.</p>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
}

export default Error;