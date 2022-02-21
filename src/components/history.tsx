import React from "react";
import testArray from "../test/testArray";


function History() {

    return ( 
        <div className="history">
            <div className="history__list">

                {/* ONLY FOR TEST */}
                {testArray}

            </div>
            <div className="history__fade" />
            <button type="button" className="clear-button">
                <img src="/images/clear.png" alt="clear" className="clear-button__image" />
            </button>
        </div>
     );
}

export default History;