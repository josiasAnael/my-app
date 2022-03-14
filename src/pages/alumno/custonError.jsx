export const ErrorInput = ({error}) => {
    return (
        <>
            <br />
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </>
    );
}