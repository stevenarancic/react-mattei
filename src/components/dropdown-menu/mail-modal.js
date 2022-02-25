import { Button, Modal } from "react-bootstrap";

function MailModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    E-mail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul style={{ listStyle: "none", margin: 0 }}>
                    <li>
                        <a href="mailto: mattei@mattei.com.br">
                            mattei@mattei.com.br
                        </a>
                    </li>
                    <li>
                        <a href="mailto: financeiro@mattei.com.br">
                            financeiro@mattei.com.br
                        </a>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MailModal;
