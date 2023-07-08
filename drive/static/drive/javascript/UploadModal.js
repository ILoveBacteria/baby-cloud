import React from "react";


export function UploadModal(props) {
    return (
        <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form method="post" action="api/upload_file/" encType="multipart/form-data">
                        <div className="modal-header">
                            <h5 className="modal-title" id="uploadModalLabel">Upload file</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="pathInput" className="form-label">Path</label>
                                <input id="pathInput" className="form-control" type="text" name="path" value={props.path}
                                       readOnly/>
                            </div>
                            <div>
                                <label htmlFor="fileInput" className="form-label">File</label>
                                <input className="form-control" id="fileInput" type="file" name="file"/>
                            </div>
                            <input type="hidden" name="csrfmiddlewaretoken" value={props.csrf_token}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Close
                            </button>
                            <input type="submit" className="btn btn-primary" value="Upload"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}