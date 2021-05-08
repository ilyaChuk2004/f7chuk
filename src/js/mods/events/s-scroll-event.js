import $ from "dom7";
import { s_tabs } from "../s-tabs";
import { s_ms_tips } from "../s-ms-tips";
import store from "../../store";

export function s_scroll_event(e) {
  if (!store.state.appData.desktop) {
    document.addEventListener("scroll",
      function (event) {
        if (
          event.target.className.includes("page-content") &&
          event.target.className.includes("home")
        ) {
          s_tabs("page-content");
        }
      },
      {
        capture: true,
        passive: true
      }
    );
  }

  $(document).on("click", ".mainScreen-tip", (e) => {
    s_ms_tips(e); //делает ссылку с меню на главном экране активной
  });
}
