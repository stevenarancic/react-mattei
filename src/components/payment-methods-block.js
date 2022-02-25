import React from "react";

export default function PaymentsMethodBlock() {
    return (
        <div className="mt-4">
            <h5>Métodos de Pagamento</h5>
            <div class="d-flex flex-row">
                <div class="me-1">
                    <img
                        src="https://mattei.com.br/images/cartoes/24_102400boleto.jpg"
                        alt="Boleto"
                    />
                </div>
                <div class="me-1">
                    <img
                        src="https://mattei.com.br/images/cartoes/5.png"
                        alt="Mastercard box"
                    />
                </div>
                <div class="me-1">
                    <img
                        src="https://mattei.com.br/images/cartoes/4.png"
                        alt="Hipercard box"
                    />
                </div>
                <div class="me-1">
                    <img
                        src="https://mattei.com.br/images/cartoes/3.png"
                        alt="elo"
                    />
                </div>
                <div class="me-1">
                    <img
                        src="https://mattei.com.br/images/cartoes/2.png"
                        alt="Amex"
                    />
                </div>
                <div class="me-1">
                    <img
                        src="https://mattei.com.br/images/cartoes/1.png"
                        alt="VISA"
                    />
                </div>
            </div>
        </div>
    );
}
