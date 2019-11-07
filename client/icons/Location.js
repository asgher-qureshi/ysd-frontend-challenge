import React from "react";

const SvgLocation = props => (
  <svg viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M30 12.877c0 5.73-10 20.873-10 20.873S10 18.608 10 12.877C10 7.146 14.477 2.5 20 2.5s10 4.646 10 10.377z"
      />
      <path
        fill="currentColor"
        d="M23.125 12.5a3.125 3.125 0 11-6.25 0 3.125 3.125 0 016.25 0z"
      />
    </g>
  </svg>
);

export default SvgLocation;
