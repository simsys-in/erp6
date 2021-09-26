import React from 'react';
import { jsPDF } from "jspdf";

class JSPDFTest extends React.Component
{
    constructor(props:any)
    {
        super(props);
        this.printPDF = this.printPDF.bind(this);
    }

    printPDF()
    {
        var specialElementHandlers = {
            '#myId': function(element:any, renderer:any)
            {
                return true;
            },
        };

        var pdf = new jsPDF();

        pdf.text('Hello World',10, 10);

        pdf.save('Test.pdf');
    }

    render()
    {
        return (
        <div>
            <div id="myId">
                <h2> HTML to PDF</h2>
                <p> A sample HTML to PDF</p>
            </div>
            <button onClick = {this.printPDF}> Download PDF </button>
        </div> 
        );
    }
}

export default JSPDFTest;