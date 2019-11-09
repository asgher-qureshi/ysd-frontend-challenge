import React from "react";

const SvgOutageWarning = props => (
  <svg viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M17.96 6.07L3.57 31.66a2.9 2.9 0 002.54 4.33h28.78a2.9 2.9 0 002.54-4.33l-14.4-25.6a2.9 2.9 0 00-5.07 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 15.64v8.27"
      />
      <path
        fill="currentColor"
        d="M22 28.73a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0"
      />
    </g>
  </svg>
);

export default SvgOutageWarning;
