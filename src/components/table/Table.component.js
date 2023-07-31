import React, { PureComponent } from "react";
import "./Table.scss";
import UpArrow from "../../images/icons8-sort-up-50.png";
import DownArrow from "../../images/icons8-sort-down-50.png";

class TableComponent extends PureComponent {
  render() {
    const {
      changePage,
      handleChange,
      searchValue,
      isSort,
      handleDropDown,
      dropDown,
      currentPage,
      nextPage,
      prePage,
      num,
      sortAs,
      sortDe,
      currentRow,
    } = this.props;
    const filterTable = currentRow.filter(val => {
      if (
        val.id.toString() === searchValue ||
        val.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        val.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        val.airport_code.toLowerCase().includes(searchValue.toLowerCase()) ||
        val.currency.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return val;
      }
    });
    return (
      <section>
        <article>
          <aside>
            <select name="" id="" onChange={handleDropDown} value={dropDown}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>

            <div>
              <label htmlFor="search">Search : </label>
              <input
                type="search"
                name="searchValue"
                id="searchValue"
                onChange={handleChange}
              />
            </div>
          </aside>

          <table>
            <tr>
              <th>
                Id
                <span className="action">
                  <img
                    src={UpArrow}
                    onClick={sortAs}
                    alt=""
                  />
                  <img
                    src={DownArrow}
                    alt=""
                    onClick={sortDe}
                  />
                </span>
              </th>
              <th>
                First-Name
                <span className="action">
                  <img
                    src={UpArrow}
                    onClick={sortAs}
                    alt=""
                  />
                  <img
                    src={DownArrow}
                    alt=""
                    onClick={sortDe}
                  />
                </span>
              </th>
              <th>
                Last-Name
                <span className="action">
                  <img
                    src={UpArrow}
                    onClick={sortAs}
                    alt=""
                  />
                  <img
                    src={DownArrow}
                    alt=""
                    onClick={sortDe}
                  />
                </span>
              </th>
              <th>
                AirPort-Code
                <span className="action">
                  <img
                    src={UpArrow}
                    onClick={sortAs}
                    alt=""
                  />
                  <img
                    src={DownArrow}
                    alt=""
                    onClick={sortDe}
                  />
                </span>
              </th>
              <th>
                Currency
                <span className="action">
                  <img
                    src={UpArrow}
                    onClick={sortAs}
                    alt=""
                  />
                  <img
                    src={DownArrow}
                    alt=""
                    onClick={sortDe}
                  />
                </span>
              </th>
            </tr>

            {filterTable.length === 0 && searchValue !== "" ? (
              <tr className="message">
                <td>No Matching Record</td>
              </tr>
            ) : (
              filterTable.map((val, ind) => (
                <tr key={ind}>
                  <td>{val.id}</td>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.airport_code}</td>
                  <td>{val.currency}</td>
                </tr>
              ))
            )}
          </table>
          <div className="paginationBlock">
            <ul className="pagination">
              <li>
                <p onClick={prePage}>Previous</p>
              </li>
              {num.map((val, ind) => (
                <li
                  className={`cur ${currentPage === val ? "active" : "cur"}`}
                  key={ind}
                >
                  <a href="#" className="cur" onClick={() => changePage(val)}>
                    {val}
                  </a>
                </li>
              ))}
              <li>
                <p onClick={nextPage}>Next</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    );
  }
}

export default TableComponent;
