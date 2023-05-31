import { $ } from "../../dom";
import Header from "../Header";
import MainTemplate from "./MainTemplate";

const Main = ($root: HTMLDivElement) => {
  const $header = Header();
  const $main = MainTemplate();
  $root.insertAdjacentHTML("beforeend", $header);
  $root.insertAdjacentHTML("beforeend", $main);

  const $toggle = $<HTMLInputElement>("#toggle-all");
  $toggle.addEventListener("click", console.log);
};

export default Main;
