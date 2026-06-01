const LoaderSpinner = () => {
    return (
        <div class="d-flex justify-content-center spinner-circle">
            <div class="spinner-border" role="status" style={{width: "4rem", height: "4rem", role:"status",}}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
export default LoaderSpinner;
