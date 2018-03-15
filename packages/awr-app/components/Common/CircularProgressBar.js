import React from "react";
import styled, { injectGlobal } from 'styled-components';

const CircleBackground = styled.circle`
  fill: none;
  stroke: #ddd;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: #0071D4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const CircleText = styled.text`
  font-weight: bold;
  fill: #0071D4;
`;

injectGlobal`
  #progressInput {
    margin: 20px auto;
    width: 30%;
  }
`;

class CircularProgressBar extends React.Component {
  state = {};

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}>
        <CircleBackground
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`} />
        <CircleProgress
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }} />
        <CircleText
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle">
          {`${this.props.text}`}
        </CircleText>
      </svg>
    );
  }
}

export default CircularProgressBar;