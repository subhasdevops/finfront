import React, { Component } from "react";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  state = {
    selectedFile: null,
    data: [],
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = async () => {
    const url = "https://finaw.herokuapp.com/books";

    const options = {
      method: "POST",
      body: this.state.selectedFile,
    };
    const response = await fetch(url, options);

    const data = await response.json();

    this.setState({ data: data });
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h1>File Details:</h1>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  render() {
    console.log(this.state.data);
    return (
      <>
        <Header />
        <div className="bg-cont">
          <h1>FinancePeer</h1>
          <h1>File Upload using React!</h1>
          {this.state.data === [] ? "" : <p>{this.state.data.message}</p>}
          <div>
            <input type="file" onChange={this.onFileChange} accept=".json" />
            <button onClick={this.onFileUpload}>Upload!</button>
          </div>
          {this.fileData()}
        </div>
      </>
    );
  }
}

export default Home;
