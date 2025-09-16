export default function Delete() {


    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete</h5>
                        <button type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}