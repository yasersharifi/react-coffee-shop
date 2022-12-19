const ClientSayBox = (props: any) => {
    const { image, fullName, job, comment } = props;
    return (
        <>
            <div className="d-flex align-items-center mb-3">
                <img 
                    className="img-fluid" 
                    src={image}
                    alt="" 
                />
                <div className="ml-3">
                <h4>{ fullName }</h4>
                <i>{job}</i>
                </div>
            </div>
            <p className="m-0">
                {comment}
            </p>
        </>
    )
}

export default ClientSayBox;