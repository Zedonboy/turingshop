import * as React from "react";
import App from "./App";
import { CategoryModel } from "../../server/Models/Category";
import { ClientState } from "../utils/ClientState";
import Cat_Panel_Btn from "./CategoryPanelBtn";
import { ProductModel } from "../../server/Models/ProductModel";
import Product from "./Product";
import { TuringApi } from "../utils/TuringApi";

export default class CategoryPanel extends React.Component {
  private categories : CategoryModel[]
  private products : ProductModel[]
  private current_Active_Cat_ID = -1
  private async onCatBtnPressed(id : number){
    try {
      let data = await TuringApi.Get_Products_From_Category(this.current_Active_Cat_ID);
      this.products = data as any
      this.forceUpdate()
    } catch (error) {
      
    }
  }
  private async onLoadMoreCLicked(event){
    try {
      let data = await TuringApi.Get_Products_From_Category(this.current_Active_Cat_ID)
    } catch (error) {
      
    }
  }
  constructor(props){
    super(props)
    let clientstate = App.store.getState() as ClientState
    this.categories = clientstate.categories
  }
  render() {
    return (
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                All Products
              </button>
             {this.categories.map(cat => <Cat_Panel_Btn onClick={this.onCatBtnPressed} id={cat.id} name = {cat.category_name}/>)}
            </div>
            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Search
              </div>
            </div>
            {/* Search product */}
            <div
              className="dis-none panel-search w-full p-t-10 p-b-15"
              style={{ display: "none" }}
            >
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search" />
                </button>
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div
            className="row isotope-grid"
            style={{ position: "relative", height: "1721.67px" }}
          >
            {
              this.products.map(prod => <Product instance={prod}/>)
            }
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
            onClick={this.onLoadMoreCLicked}
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>
    );
  }
}
