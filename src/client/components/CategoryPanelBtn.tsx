import * as React from "react";

interface ICatBtn {
    id : number
  name?: string;
  onClick : (id : number) => void 
}
export default class Cat_Panel_Btn extends React.Component<ICatBtn> {
    private onBtnclick (event) {
        this.props.onClick(this.props.id)
    }
  render() {
    return (
      <button
      onClick={this.onBtnclick}
        className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
        data-filter="*"
      >
        {this.props.name}
      </button>
    );
  }
}
