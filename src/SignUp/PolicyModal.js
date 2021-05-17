import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PolicyModal = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <p onClick={toggle} className={"modalLink"}> {props.title} </p>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    We respect your privacy. Our Privacy Policy is incorporated into and forms a part of
                     these Terms of Use and part of our agreement with you. Read it carefully since it describes,
                      among other things, 
                    how we collect and use information we obtain when you use this Website.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default PolicyModal;