import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
    return (
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        User
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    );
}

export default BreadcrumbExample;