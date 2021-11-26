import { Component } from "react";
import Header from "../Header";

import "./index.css";

class Data extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getBlogItemData();
  }

  getBlogItemData = async () => {
    const apiUrl = "https://finaw.herokuapp.com/books";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);

    this.setState({ data: data });
  };

  renderData = (each) => {
    const { id, userId, body, title } = each;
    return (
      <li key={id} className="item">
        <h1>Id: {id}</h1>
        <h1>UserId: {userId}</h1>
        <h1>Title: {title}</h1>
        <h1>Body: {body}</h1>
      </li>
    );
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <Header />
        <div className="data-cont">
          {data.length === 0 ? (
            <h1 className="head">Please upload data</h1>
          ) : (
            <ul>{data.map((each) => this.renderData(each))}</ul>
          )}
        </div>
        ;
      </>
    );
  }
}

export default Data;
