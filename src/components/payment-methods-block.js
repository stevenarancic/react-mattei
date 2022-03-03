import React from "react";

export default function PaymentsMethodBlock() {
    const data = [
        {
            image: "https://mattei.com.br/images/cartoes/24_102400boleto.jpg",
            alt: "Boleto",
        },
        {
            image: "https://mattei.com.br/images/cartoes/5.png",
            alt: "Mastercard",
        },
        {
            image: "https://mattei.com.br/images/cartoes/4.png",
            alt: "Hipercard",
        },
        {
            image: "https://mattei.com.br/images/cartoes/3.png",
            alt: "elo",
        },
        {
            image: "https://mattei.com.br/images/cartoes/2.png",
            alt: "Amex",
        },
        {
            image: "https://mattei.com.br/images/cartoes/1.png",
            alt: "VISA",
        },
    ];

    return (
        <div className="mt-4 mb-4">
            <h5>Métodos de Pagamento</h5>
            <div class="d-flex flex-row">
                {data.map((item) => (
                    <div className="me-1">
                        <img src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}
