function e(e){return e&&e.__esModule?e.default:e}var t,a,l=globalThis,o={},n={},i=l.parcelRequire3bba;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},l.parcelRequire3bba=i);var s=i.register;s("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,l=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)l.set(t[a],{baseUrl:e,path:t[a+1]})}}),s("fGYy7",function(e,t){e.exports=new URL("symbol-defs.2cd203c5.svg",import.meta.url).toString()}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["bB2pd","contacts.9637a081.js","26wvs","logo_TaskMaster_1x.2ce09463.jpg","dLtNK","logo_TaskMaster_2x.7c71e9a0.jpg","2d88Z","symbol-defs.2cd203c5.svg","hO1ZV","contacts.5f8680a2.js","9pQ7w","contacts.02620e78.css"]'));var r=i("9EgcF");let c=(e=21)=>{let t="",a=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&a[e]];return t};var d={};d=new URL("logo_TaskMaster_1x.2ce09463.jpg",import.meta.url).toString();var u={};u=new URL("logo_TaskMaster_2x.7c71e9a0.jpg",import.meta.url).toString();var m=i("fGYy7");(t=a||(a={})).Work="work",t.Health="health",t.Finance="finance",t.Family="family",t.Friends="friends",t.Home="home",t.Shopping="shopping",t.Travel="travel",t.Learning="learning",t.Miscellaneous="miscellaneous";const v="taska-list",p=`<nav class="navbar navbar-expand-xl">
        <div class="container-fluid">
          <a
            class="navbar-brand logo-container"
            href="index.html"
            aria-label="TaskMaster Logo"
          >
            <img
              srcset="${/*@__PURE__*/e(d)} 1x, ${/*@__PURE__*/e(u)} 2x"
              src="${/*@__PURE__*/e(d)}"
              alt="logo"
              width="180"
              height="24"
              class="d-inline-block align-text-top logo-image"
            />
            <span class="logo-text">TaskMaster</span>
          </a>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="tasks.html">Tasks</a>
                <a class="nav-link" href="contacts.html">Contacts</a>
              </div>
              <button type="button" class="add-task-button btn-modal-open">
                Add task
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="menu-list">
        <button type="button" class="btn-menu-close" aria-label="Close">
          <svg width="48" height="48" class="icon-close">
            <use href="${/*@__PURE__*/e(m)}#icon-x"></use>
          </svg>
        </button>
        <ul class="list-items">
          <li><a class="menu-item" href="index.html">Home</a></li>
          <li><a class="menu-item" href="tasks.html">Tasks</a></li>
          <li><a class="menu-item" href="contacts.html">Contacts</a></li>
        </ul>
      </div>
      <section class="modal-content hidden">
        <div class="modal-title-container">
          <h3>Add task</h3>
          <button
            type="button"
            class="btn-close btn-modal-close"
            aria-label="Close"
          ></button>
        </div>
        <form class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="titleInput" class="form-label">Title*</label>
            <input type="text" class="form-control" id="titleInput" required />
            <div class="invalid-feedback">Please create a title.</div>
          </div>
          <div class="mb-3">
            <label for="categorySelect" class="form-label">Category*</label>
            <select
              class="form-select modal-select"
              aria-label="Select categories"
              id="categorySelect"
              required
            >
              <option value="" selected></option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Home">Home</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="Learning">Learning</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
            <div class="invalid-feedback">Please choose a category.</div>
          </div>
          <div class="mb-3"><label for="descriptionText" class="form-label">Description(optional)</label>
          <textarea type="text" class="form-control" id="descriptionText"></textarea>
          </div>
          <div class="mb-3">
            <label for="deadlineTime" class="form-label">Deadline*</label>
            <input
              type="datetime-local"
              class="form-control"
              id="deadlineTime"
              required
            />
            <div class="invalid-feedback" >Please choose deadline time.</div>
          </div>
          <button class="btn btn-primary btn-submit-modal" type="submit">
            Submit
          </button>
        </form>
      </section>
           <div class="overlay hidden"></div>
      `;document.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.createElement("header");e.classList.add("header"),e.innerHTML=p,document.body.prepend(e)}();let e=document.querySelector(".navbar-toggler"),t=document.querySelector(".btn-menu-close"),a=document.querySelector(".menu-list"),l=document.querySelector(".modal-content"),o=document.querySelector(".overlay"),n=document.querySelector(".btn-modal-open"),i=document.querySelector(".btn-modal-close"),s=document.querySelector("form");e.addEventListener("click",()=>{a.classList.toggle("active")}),t.addEventListener("click",()=>{a.classList.toggle("active")}),n.addEventListener("click",function(){l.classList.remove("hidden"),o.classList.remove("hidden")});let d=function(){l.classList.add("hidden"),o.classList.add("hidden")};i.addEventListener("click",d),o.addEventListener("click",d),document.addEventListener("keydown",function(e){"Escape"!==e.key||l.classList.contains("hidden")||d()}),s.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("titleInput").value,a=document.getElementById("categorySelect").value,l=document.getElementById("descriptionText").value,o=document.getElementById("deadlineTime").value;if(""===t.trim()||""===a.trim()||""===o)(0,r.Notify).failure("Please fill in all required fields.",{position:"center-center",timeout:1e3});else{let e={id:c(),title:t.charAt(0).toUpperCase()+t.slice(1),category:a,isCompleted:!1,deadline:new Date(o)};""!==l.trim()&&(e.description=l);let n=JSON.parse(localStorage.getItem(v)||"[]");n.push(e),localStorage.setItem(v,JSON.stringify(n)),s.reset(),d(),(0,r.Notify).success("Task added successfully!",{position:"center-center",timeout:1e3})}})});
//# sourceMappingURL=contacts.9637a081.js.map
