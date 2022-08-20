import React from "react";


function ProfilePhoto() {
    return <div className="col-lg-4">
        <div className="card mb-4">
            <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: 150 }} />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
            </div>
        </div>
    </div>
};

export default ProfilePhoto;