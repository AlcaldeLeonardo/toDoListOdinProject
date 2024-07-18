import { CollectionArray } from "../../modules/classes/CollectionArray";
import { updateStorage } from "../../modules/updateStorage";
import { updateScreen } from "../updateScreen";
import { btnDOM } from "./btnDOM";

export function successBtn(task) {
  const btn = btnDOM("Done", "btn btn--green", "doneBtn");
  console.log(task);

  if (task.success === true) {
    btn.innerHTML = "Done ✓";
  }
  btn.addEventListener("click", () => {
    task.success ? (task.success = false) : (task.success = true);
    btn.innerHTML = task.success ? "Done ✓" : "Done";
    updateStorage();
    updateScreen(CollectionArray.ActiveCollection);
  });

  return btn;
}