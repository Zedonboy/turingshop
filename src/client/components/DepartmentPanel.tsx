import * as React from "react";
import { Store } from "redux";
import App from "./App";
import { DepartmentModel } from "../../server/Models/DepartmentModel";
import { ClientState } from "../utils/ClientState";
import Department from "./Department";

export default class DepartmentPanel extends React.Component {
  private store : Store
  private departments : DepartmentModel[]
  constructor (props) {
    super(props)
    let clientData = App.store.getState() as ClientState
    this.departments = clientData.departments
  }
  render() {
    return (
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Department Overview</h3>
          </div>
          <div className="row">
            {
              this.departments.map(dep => <Department instance = {dep}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}
