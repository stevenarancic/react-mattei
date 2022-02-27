import { Button, Modal } from "react-bootstrap";

function PhoneModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Telefones
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul style={{ listStyle: "none", margin: 0 }}>
                    <li>(51) 3033-5050</li>
                    <li>(51) 3473-3115</li>
                    <li>
                        <a
                            href="https://api.whatsapp.com/send?phone=555199964-0860"
                            style={{ textDecoration: "underline" }}
                        >
                            (51) 9 9964-0860
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

export default PhoneModal;
