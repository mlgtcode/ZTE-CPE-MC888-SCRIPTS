// ==UserScript==
// @name         ZTE-CPE-MC888-SCRIPT UI
// @version      0.1
// @description  Add navbar and replace footer with links to hidden features.
// @include      http://192.168.1.1/*
// @include      http://192.168.2.1/*
// @require https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==
document.body.appendChild(document.createElement('style')).textContent = `
#topContainer #logoutj, #topContainer #h_ssid_mesh, #home_control #currentOpMode {
    display: none !important;
}

`;

theParent = document.getElementById("indexContainer");
theKid = document.createElement("div");
theKid.innerHTML = `<div style="padding-bottom: 6px;"><ul class="nav nav-tabs nav-justified" role="tablist">
                <li><a href="#home">Home</a></li>
                <li><a href="#wifi_main">WiFi</a></li>
                <li><a href="#internet_setting">Internet</a></li>
                <li><a href="#router_setting" data-trans="router_setting">Router</a></li>
                <li><a href="#station_info">Devices</a></li>
                <li><a href="#traffic_alert">Traffic</a></li>
                <li><a href="#others" data-trans="others">Advanced</a></li>
            </ul></div>`;

theParent.appendChild(theKid);
theParent.insertBefore(theKid, theParent.firstChild);
var theRep = `
<a href="#debug_page">Debug</a> • <a href="#ant_switch">Ant switch</a> • <a href="#rf_mmw">Ant mod</a> • <a href="#temp_status">Temp control</a> • <a href="#bsp_tc_settings">TC settings</a> • <a href="#tr069config">TR069</a></div>
                    </a>`;
document.getElementById('footer').innerHTML = theRep;
