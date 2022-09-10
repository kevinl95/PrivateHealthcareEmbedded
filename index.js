"use strict";

module.exports = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<iframe sandbox="allow-same-origin allow-scripts allow-forms" src="https://privatehealth.care/embed.html" style="border: 0; width:100%; height:100%;"></iframe>'); 
    res.end(); 
}