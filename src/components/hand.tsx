import React from "react";
import { HandType } from "../interfaces/handType";

interface Props {
  clickHand?: (val: HandType) => void;
  selectHand?: HandType;
  handType: HandType;
  selected: Boolean;
}

export default class Index extends React.Component<Props> {
  render() {
    const imgSize = 100;
    const handType = HandType[this.props.handType];

    return (
      <div>
        <button
          onClick={() => {
            this.props.clickHand && this.props.clickHand(this.props.handType);
          }}
        >
          <img
            src={`images/${handType}.jpeg`}
            alt={handType}
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.props.selected ? "1.0" : "0.3",
            }}
          />
        </button>
      </div>
    );
  }
}