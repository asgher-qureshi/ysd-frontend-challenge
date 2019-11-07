import React from "react";

const SvgMail = props => (
  <svg viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth={2}>
      <rect width={36} height={22} x={2} y={9} rx={1} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10.3l17 12.9 17-12.9"
      />
    </g>
  </svg>
);

export default SvgMail;
