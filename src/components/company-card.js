import React from "react";

export default function CompanyCard() {
    return (
        <div className="card p-3 d-flex flex-column justify-content-center">
            <img src={require("../assets/img/industry/image-1.jpg")} />
            <h4>Linha Industrial</h4>
            <p>
                Comercializamos uma grande variedade de marcas em materiais
                elétricos industriais, dentre elas, estão Siemens, Schneider
                Electric, Weg, Cemar, Margirius, Soprano, entre outras.
                Trabalhamos também, com produtos específicos sob encomenda.
                Consulte nosso chat online para maiores informações.
            </p>
        </div>
    );
}
