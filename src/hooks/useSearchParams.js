/**! (c) Yukimasa Funaoka | @license MIT License */

import { useState, useEffect } from "react";

import { exampleNames } from "../build-results-formatted";

const defaultValue = {
  ex: exampleNames[0],
  fp: "",
  ft: "0",
};

let search = parseSearch(location.hash.replace(/^#?/, "?"), defaultValue);

function parseSearch(search, base = {}) {
  const result = { ...base };
  for (const [k, v] of new URLSearchParams(search)) {
    result[k] = v;
  }
  return result;
}
function setSearch(chunk) {
  if (typeof chunk === "function") chunk = chunk(search);
  Object.assign(search, chunk);
  const chunks = [];
  for (let i in search) {
    chunks.push(i + "=" + encodeURIComponent(search[i]));
  }
  location.hash = "#" + chunks.join("&");
}

let searchListeners = [];
function publishSearch(search) {
  for (let cb of searchListeners) {
    cb(search);
  }
}
function onSearch(cb) {
  searchListeners.push(cb);
}
function offSearch(cb) {
  const index = searchListeners.indexOf(cb);
  if (index !== -1) {
    searchListeners.splice(index, 1);
  }
}

function onHachChange() {
  search = parseSearch(location.hash.replace(/^#?/, "?"), defaultValue);
  publishSearch(search);
}
window.addEventListener("hashchange", onHachChange);

export function useSearchParams() {
  const [searchState, setSearchState] = useState(search);
  useEffect(() => {
    onSearch(setSearchState);
    return () => offSearch(setSearchState);
  }, []);
  return [searchState, setSearch];
}
