import React, { useState } from "react";

function Mybutton() {

    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv)
    }
    return (

        <div>
            <button onClick={toggleDiv}>Olá</button>
            {showDiv && <div>Divfoda</div>}
        </div>

    );
}

export default Mybutton;