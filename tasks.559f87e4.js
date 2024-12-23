function e(e){return e&&e.__esModule?e.default:e}var t,i,s=globalThis,a={},n={},l=s.parcelRequire3bba;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},s.parcelRequire3bba=l);var o=l.register;o("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,s=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)s.set(t[i],{baseUrl:e,path:t[i+1]})}}),o("fGYy7",function(e,t){e.exports=new URL("symbol-defs.2cd203c5.svg",import.meta.url).toString()}),l("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7UCSQ","tasks.559f87e4.js","2d88Z","symbol-defs.2cd203c5.svg"]'));var d=l("9EgcF"),c=l("fGYy7");(t=i||(i={})).Work="work",t.Health="health",t.Finance="finance",t.Family="family",t.Friends="friends",t.Home="home",t.Shopping="shopping",t.Travel="travel",t.Learning="learning",t.Miscellaneous="miscellaneous";const r="taska-list";let u=[];const m=document.querySelector(".wrap-data"),p=document.querySelector(".tasks-list"),g=document.querySelectorAll(".btn-isCompleted"),f=document.getElementById("categoryFilter"),v=document.querySelector(".modal-edit"),y=document.querySelector(".overlay-edit"),h=document.getElementById("editForm"),b=document.getElementById("editTitleInput"),S=document.getElementById("editCategorySelect"),k=document.getElementById("editDescriptionText"),L=document.getElementById("editDeadlineTime"),E=document.querySelector(".btn-modal-close-edit");function $(t=u){let i=t.map(t=>{let i=new Date(t.deadline).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});return`
      <li class="task-item" data-id="${t.id}">
      <svg width="32" height="32" class="${t.isCompleted?"icon-completed":"icon-notCompleted"} toggle-complete">
      <use href="${/*@__PURE__*/e(c)}#${t.isCompleted?"icon-check2-circle":"icon-circle"}" class="done-icon"></use>
    </svg>
        <div class="wrap-content">
          <div class="title-container">
            <h2 class="${t.isCompleted?"title-task-completed":"title-task"}">${t.title}</h2>
            <div class="icons-container">
              <button type="button" class="icon-btn edit-btn">
                <svg width="30" height="30" class="svg-icon">
                  <use href="${/*@__PURE__*/e(c)}#icon-pencil-fill"></use>
                </svg>
              </button>
              <button type="button" class="icon-btn delete-btn">
                <svg width="30" height="30" class="svg-icon">
                  <use href="${/*@__PURE__*/e(c)}#icon-trash-fill"></use>
                </svg>
              </button>
            </div>
          </div>
          <p class="category-task">${t.category}</p>
          ${t.description?`<p class="${t.isCompleted?"description-task-completed":"description-task"}">${t.description}</p>`:""}
          <p class="dedline-data-task">${i}</p>
        </div>
      </li>
    `}).join("");p.innerHTML=i}p.addEventListener("click",e=>{let t=e.target;if(t.closest(".delete-btn")){let e=t.closest(".task-item").dataset.id;e&&(u=u.filter(t=>t.id!==e),localStorage.setItem(r,JSON.stringify(u)),$(),(0,d.Notify).info("Task deleted successfully!",{position:"center-center",timeout:1e3}))}let i=t.closest(".toggle-complete");if(i){let e=i.closest(".task-item"),t=e?.dataset.id;t&&(u=u.map(e=>e.id===t?{...e,isCompleted:!e.isCompleted}:e),localStorage.setItem(r,JSON.stringify(u)),$(),(0,d.Notify).success("Task completion status updated!",{position:"center-center",timeout:1e3}))}if(t.closest(".edit-btn")){let e=t.closest(".task-item").dataset.id,i=u.find(t=>t.id===e);i&&(v.classList.remove("hidden"),y.classList.remove("hidden"),b.value=i.title,S.value=i.category,k.value=i.description||"",L.value=i.deadline.toISOString().slice(0,16),h.dataset.taskId=i.id)}});const w=function(){v.classList.add("hidden"),y.classList.add("hidden")};E.addEventListener("click",w),y.addEventListener("click",w),document.addEventListener("keydown",function(e){"Escape"!==e.key||v.classList.contains("hidden")||w()}),h.addEventListener("submit",e=>{e.preventDefault();let t=h.dataset.taskId,i=u.findIndex(e=>e.id===t);-1!==i&&(u[i]={...u[i],title:b.value,category:S.value,description:k.value,deadline:new Date(L.value)},localStorage.setItem(r,JSON.stringify(u)),$(),(0,d.Notify).success("Task updated successfully!",{position:"center-center",timeout:1e3}),v.classList.add("hidden"),y.classList.add("hidden"))}),u=JSON.parse(localStorage.getItem(r)||"[]").map(e=>({...e,deadline:new Date(e.deadline)})),$();let I="all",C="all";function D(){let e=u;"active"===C?e=e.filter(e=>!e.isCompleted):"completed"===C&&(e=e.filter(e=>e.isCompleted)),"all"!==I&&(e=e.filter(e=>e.category===I)),$(e)}g.forEach(e=>{e.addEventListener("click",function(){g.forEach(e=>e.classList.remove("active-filter")),this.classList.add("active-filter"),C=this.getAttribute("data-filter"),D()})}),f.addEventListener("change",()=>{I=f.value,D()});const F=new Date,T=F.getDate().toString().padStart(2,"0"),H=F.toLocaleString("en-US",{month:"long"}),N=F.getFullYear();m.innerHTML=` <p class="data-day">${T}</p>
        <p class="data-month">${H} <span class="data-year">${N}</span></p>`;
//# sourceMappingURL=tasks.559f87e4.js.map
