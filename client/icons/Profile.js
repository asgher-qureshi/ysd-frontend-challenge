import React from "react";

const SvgProfile = props => (
  <svg viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        d="M8 34c.17-5.6 2.6-8.4 7.3-8.4h10.54c4.37 0 6.75 2.8 7.16 8.4"
      />
      <ellipse cx={20.02} cy={13.93} rx={8.17} ry={7.93} />
    </g>
  </svg>
);

export default SvgProfile;
