import { useState } from "react";

function Forma({ dodajOdjecu }) {

    const [tip, promijeniTip] = useState("");
    const [boja, promijeniBoju] = useState("");
    const [velicina, promijeniVelicinu] = useState("");
    const [materijal, promijeniMaterijal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dodajOdjecu({ tip, boja, velicina });
        promijeniTip("");
        promijeniBoju("");
        promijeniVelicinu("");
        promijeniMaterijal("");
    }

    return (
        <div className="Forma">
            <form onSubmit={handleSubmit}>
                Novi proizvod: <br />
                <input type="text" required onChange={(e) => promijeniTip(e.target.value)} value={tip} />

                Nova boja: <br />
                <input type="text" required onChange={(e) => promijeniBoju(e.target.value)} value={boja} />

                Nova veličina: <br />
                <input type="text" required onChange={(e) => promijeniVelicinu(e.target.value)} value={velicina} />

                Novi materijal: <br />
                <input type="text" required onChange={(e) => promijeniMaterijal(e.target.value)} value={materijal} />

                <input type="submit" value="Dodaj novi proizvod" />
            </form>
        </div>
    );
}

export default Forma;