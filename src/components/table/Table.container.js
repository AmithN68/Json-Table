import React, { PureComponent } from "react";
import TableComponent from "./Table.component";

export class TableContainer extends PureComponent {
  state = {
    data: [],
    searchValue: "",
    dropDown: 10,
    currentPage: 1,
    nPage: [],
  };
  componentDidMount() {
    this.table();
  }
  async table() {
    fetch("http://localhost:4060/data")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw "Rejected message";
      })
      .then(res => {
        this.setState({ data: res });
      })
      .catch(rej => console.log(rej));
  }
  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  handlePage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };
  changePage = id => {
    this.setState({ currentPage: id });
  };
  prePage = () => {
    const { currentPage } = this.state;
    if (currentPage !== 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };
  nextPage = () => {
    const { currentPage, nPage } = this.state;
    if (currentPage !== nPage) {
      this.setState({ currentPage: currentPage + 1 });
    }
  };
  handleDropDown = e => {
    this.setState({ dropDown: parseInt(e.target.value) });
  };
  sortAs = () => {
    let sortedData = [...this.state.data];
    sortedData.sort((a, b) => a.id - b.id);
    this.setState({ data: sortedData });
    console.log(sortedData, "sorted");
  };
  sortDe = () => {
    let sortedData = [...this.state.data];
    sortedData.sort((a, b) => b.id - a.id);
    this.setState({ data: sortedData });
    console.log(sortedData, "reverse");
  };
  render() {
    const { data, currentPage, dropDown } = this.state;
    const last = currentPage * dropDown;
    const first = last - dropDown;
    const currentRow = data.slice(first, last);
    const num = [...Array(this.state.nPage + 1).keys()].slice(1);
    const demo = Math.ceil(data.length / this.state.dropDown);
    this.setState({
      nPage: demo,
    });
    return (
      <div>
        <TableComponent
          {...this.state}
          isSort={this.state.isSort}
          handleChange={this.handleChange}
          handleDropDown={this.handleDropDown}
          handlePage={this.handlePage}
          prePage={this.prePage}
          changePage={this.changePage}
          nextPage={this.nextPage}
          currentRow={currentRow}
          num={num}
          sortAs={this.sortAs}
          sortDe={this.sortDe}
          first={first}
          last={last}
          nPage={this.state.nPage}
        />
      </div>
    );
  }
}

export default TableContainer;
