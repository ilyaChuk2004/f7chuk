import $ from "dom7";
import { s_tabs } from "../s-tabs";
import { s_ms_tips } from "../s-ms-tips";
import store from "../../store";

export function s_scroll_event(e) {
  var scrolling = false;
  let event;
  
  if (!store.state.appData.desktop) {
    document.addEventListener("scroll",
      function (e) {
        scrolling = true;
        event=e
      },
      {
        capture: true,
        passive: true
      }
    );

    setInterval( function() {
      if ( scrolling ) {
      scrolling = false;
              
      if (
        event.target.className.includes("page-content") &&
        event.target.className.includes("home")
      ) {
        s_tabs("page-content");
      }
      }
      }, 250 );

  }

  $(document).on("click", ".mainScreen-tip", (e) => {
    s_ms_tips(e); //делает ссылку с меню на главном экране активной
  });
}
