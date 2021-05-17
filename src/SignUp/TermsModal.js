import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TermsModal = (props) => {
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
                    PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BECAUSE THEY, AND THE OTHER TERMS AND CONDITIONS REFERRED TO BELOW, DESCRIBE YOUR RIGHTS AND RESPONSIBILITIES AND FORM A LEGALLY BINDING AGREEMENT BETWEEN YOU AND US REGARDING YOUR USE OF OUR WEBSITE. IF, FOR ANY REASON, YOU ARE UNABLE OR UNWILLING TO AGREE TO ALL OUR TERMS AND CONDITIONS, PLEASE IMMEDIATELY STOP USING OR ATTEMPTING TO USE THIS WEBSITE, BECAUSE IF YOU CONTINUE YOU WILL BE AGREEING TO ALL THE TERMS AND CONDITIONS THAT ARE DESCRIBED OR REFERRED TO BELOW.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default TermsModal;