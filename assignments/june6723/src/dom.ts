export const $ = <T extends HTMLElement>(selector: string) => {
  const $element = document.querySelector(selector);
  if ($element === null) {
    throw new Error("해당 엘리먼트가 존재하지 않습니다!");
    // return document.createElement("div") as HTMLElement;
  }

  return $element as T;
};
