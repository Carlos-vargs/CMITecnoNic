window.addEventListener("app:mounted",(()=>{new Modal("#cmiModal");const e=document.querySelector("#cmiDatePicker");e._datepicker=flatpickr(e)}),{once:!0}),document.addEventListener("DOMContentLoaded",(function(){(()=>{const e=()=>{document.querySelectorAll(".popper-ref").forEach((e=>{if(!e.dataset.popperInitialized){const t=e.closest('[id^="dropdown-wrapper-"]').id;new Popper(`#${t}`,".popper-ref",".popper-root",{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]}),e.dataset.popperInitialized="true",console.count("testing")}}))},t=new MutationObserver((t=>{t.forEach((t=>{"childList"==t.type&&e()}))})),o=document.getElementById("cmi-container");t.observe(o,{childList:!0,subtree:!0}),e()})()}));