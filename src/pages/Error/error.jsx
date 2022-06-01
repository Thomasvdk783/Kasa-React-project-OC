import React from "react";
import { Link } from "react-router-dom"

function Error() {
return (
    <div className="error-page">
        <h1 className="title-error-page">404</h1>
        <p className="subtitle-error-page">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="retour-acceuil" to="/">Retourner sur la page d'acceuil</Link>
    </div>
);
}

export default Error;
