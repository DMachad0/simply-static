let pluginCards = document.getElementsByClassName("plugin-card");

for (let i = 0; i < pluginCards.length; i++) {
    let div = document.createElement("div");

    div.classList.add('simply-static-compatible');

    div.innerHTML = '<svg width="25" height="25" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3604 0.170671L25.75 0.170654L18.9519 10.6659C18.9341 10.6938 18.9161 10.7216 18.8979 10.7493L18.7988 10.9024L18.7948 10.9016C17.5607 12.6713 15.5101 13.8292 13.189 13.8292C11.26 13.8292 9.51772 13.0294 8.27581 11.7433L10.4964 8.29579C10.9562 9.39686 12.0432 10.1707 13.311 10.1707C14.4638 10.1707 15.4672 9.5308 15.9854 8.58687L19.1374 3.64246L19.1473 3.66015L21.3604 0.170671ZM10.7004 5.5463C11.2344 4.66332 12.2038 4.0731 13.311 4.0731C14.5068 4.0731 15.5418 4.76153 16.0413 5.76368L18.1864 2.3453C16.9397 1.00736 15.1621 0.170659 13.189 0.170659C10.868 0.170659 8.81736 1.32856 7.58333 3.09824L7.57928 3.09749L7.51893 3.19224C7.45485 3.28748 7.3931 3.38443 7.33377 3.48299L0.75 13.8211L5.2622 13.8211L7.32568 10.5034C7.32905 10.509 7.33243 10.5146 7.33581 10.5202L10.7004 5.5463ZM13.311 8.59297C12.4985 8.59297 11.8399 7.93434 11.8399 7.12187C11.8399 6.30941 12.4985 5.65078 13.311 5.65078C14.1234 5.65078 14.7821 6.30941 14.7821 7.12187C14.7821 7.93434 14.1234 8.59297 13.311 8.59297Z" fill="white"/> </svg>  ';
    div.innerHTML += '<p>Compatible with Simply Static.</p>';
    div.innerHTML += '<style>.simply-static-compatible {\n' +
        '    position: absolute;\n' +
        '    margin-left: -10px;\n' +
        '    margin-top: -10px;\n' +
        '    border-radius: 50%;\n' +
        '    width: 32px;\n' +
        '    height: 32px;\n' +
        '    border: solid 1px;\n' +
        '    background: #6804cc;\n' +
        '} .simply-static-compatible > p {display: none;}' +
        '.simply-static-compatible > svg {\n' +
        '    margin: 2px auto;\n' +
        '    display: block;\n' +
        '}' +
        '</style>';

    pluginCards[i].prepend(div);
}



