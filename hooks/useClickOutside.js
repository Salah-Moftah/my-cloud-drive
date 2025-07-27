"use client";

// useClickOutside Hook
// Triggers a callback when a click happens outside a given element
// Params:
// - ref: a React ref to the target element
// - callback: function to call when clicking outside the element

import { useEffect } from "react";

export function useClickOutSide(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
