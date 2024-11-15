import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';


const MyAccount = () => {

    document.title = "My Account | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="My Account" pageTitle="Accounts" />
                    
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MyAccount;