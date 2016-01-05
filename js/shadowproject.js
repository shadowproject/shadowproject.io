/*! BRICKst v1.0.0 | MIT License | allienworks.net */

/**
 * AnchorJS - v2.0.0 - 2015-10-31
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */
function AnchorJS(A){"use strict";function t(A){o.options.icon=o.options.hasOwnProperty("icon")?A.icon:"",o.options.visible=o.options.hasOwnProperty("visible")?A.visible:"hover",o.options.placement=o.options.hasOwnProperty("placement")?A.placement:"right",o.options.class=o.options.hasOwnProperty("class")?A.class:"",o.options.truncate=o.options.hasOwnProperty("truncate")?Math.floor(A.truncate):64}function e(){if(null===document.head.querySelector("style.anchorjs")){var A,t=document.createElement("style"),e=" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",o=" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",n=' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',i=" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";t.className="anchorjs",t.appendChild(document.createTextNode("")),A=document.head.querySelector('[rel="stylesheet"], style'),void 0===A?document.head.appendChild(t):document.head.insertBefore(t,A),t.sheet.insertRule(e,t.sheet.cssRules.length),t.sheet.insertRule(o,t.sheet.cssRules.length),t.sheet.insertRule(i,t.sheet.cssRules.length),t.sheet.insertRule(n,t.sheet.cssRules.length)}}var o=this;this.options=A||{},t(A),this.add=function(A){var o,n,i,s,a,r,l,c,h,g,B,u;if(t(this.options),A){if("string"!=typeof A)throw new Error("The selector provided to AnchorJS was invalid.")}else A="h1, h2, h3, h4, h5, h6";if(o=document.querySelectorAll(A),0===o.length)return!1;for(e(),n=document.querySelectorAll("[id]"),i=[].map.call(n,function(A){return A.id}),a=0;a<o.length;a++){if(o[a].hasAttribute("id"))s=o[a].getAttribute("id");else{r=o[a].textContent,l=this.urlify(r),g=l,h=0;do void 0!==c&&(g=l+"-"+h),c=i.indexOf(g),h+=1;while(-1!==c);c=void 0,i.push(g),o[a].setAttribute("id",g),s=g}B=s.replace(/-/g," "),u=document.createElement("a"),u.className="anchorjs-link "+this.options.class,u.href="#"+s,u.setAttribute("aria-label","Anchor link for: "+B),u.setAttribute("data-anchorjs-icon",this.options.icon),"always"===this.options.visible&&(u.style.opacity="1"),""===this.options.icon&&(u.style.fontFamily="anchorjs-icons",u.style.fontStyle="normal",u.style.fontVariant="normal",u.style.fontWeight="normal",u.style.lineHeight=1,"left"===this.options.placement&&(u.style.lineHeight="inherit")),"left"===this.options.placement?(u.style.position="absolute",u.style.marginLeft="-1em",u.style.paddingRight="0.5em",o[a].insertBefore(u,o[a].firstChild)):(u.style.paddingLeft="0.375em",o[a].appendChild(u))}return this},this.remove=function(A){for(var t,e=document.querySelectorAll(A),o=0;o<e.length;o++)t=e[o].querySelector(".anchorjs-link"),t&&e[o].removeChild(t);return this},this.urlify=function(A){var e,o=/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;return t(this.options),e=A.replace(/\'/gi,"").replace(o,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()}}var anchors=new AnchorJS;



$( document ).ready(function() {


  // Anchor.js - add anchors to headings
  anchors.add('#content h1, #content h2, #content h3, #content h4, #content dt');


  // JSON grabbin' of latest Wallet version
  function latestVersion() {
    var url = 'http://shadow.cash/downloads/latest/version/callback=?',
        container = document.getElementById('latest-version');

    $.get(url, function(data){
      container.innerHTML = data.latest_version;
    });
  }
  latestVersion();


  // ...

  
});