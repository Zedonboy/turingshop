import * as React from "react";
import {Store} from "redux"
export default class App extends React.Component {
    private static _store : Store = null
    public static get store() : Store{
        return this._store
    }
}
