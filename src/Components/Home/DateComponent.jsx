import { useState } from "react";

export function DateComponent() {
  const [board, setBoard] = useState("7:00am");
  const [disStyle, setDisStyle] = useState({ display: "none" });

  const [aboard, setAboard] = useState("7:00am");
  const [disStyle1, setDisStyle1] = useState({ display: "none" });
  const [charge, setCharge] = useState("7:00am");
  return (
    <div>
      <h3>Search your next ride</h3>
      <p>Pickup</p>
      <div style={{ display: "flex", width: "100px", color: "lightgrey" }}>
        <p
          style={{
            border: "1px solid grey",
            padding: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i className="fa-regular fa-calendar-days"></i> <input type="date" name="" id="" />
        </p>
        <div>
          <div
            style={{ width: "150px", border: "1px solid grey", padding: "5px" }}
          >
            <div
              className="onBoardButton"
              onClick={() => {
                setDisStyle({ display: "block" });
              }}
            >
              <p>
                <i className="fa-regular fa-clock"></i> {board}
              </p>
            </div>
            <div
              className="durationDropdown"
              style={disStyle}
              onClick={() => {
                setDisStyle({ display: "none" });
              }}
            >
              <div
                //   className="durationDropdown"
                style={disStyle}
                onClick={() => {
                  setDisStyle({
                    display: "none",
                    height: "40px",
                    background: "red",
                    scrollBehavior: "inside",
                  });
                }}
              >
                <p
                  onClick={() => {
                    setBoard("8:00am");
                  }}
                >
                  8:00am
                </p>
                <p
                  onClick={() => {
                    setBoard("8:30am");
                  }}
                >
                  8:30am
                </p>
                <p
                  onClick={() => {
                    setBoard("9:00am");
                  }}
                >
                  9:00am
                </p>
                <p
                  onClick={() => {
                    setBoard("9:30am");
                  }}
                >
                  9:30am
                </p>
                <p
                  onClick={() => {
                    setBoard("10:00am");
                  }}
                >
                  10:00am
                </p>
                <p
                  onClick={() => {
                    setBoard("10:30am");
                  }}
                >
                  10:30am
                </p>
                <p
                  onClick={() => {
                    setBoard("11:00am");
                  }}
                >
                  11:00am
                </p>
                <p
                  onClick={() => {
                    setBoard("11:30am");
                  }}
                >
                  11:30am
                </p>
                <p
                  onClick={() => {
                    setBoard("12:00am");
                  }}
                >
                  12:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("12:30am");
                  }}
                >
                  12:30pm
                </p>
                <p
                  onClick={() => {
                    setBoard("1:00pm");
                  }}
                >
                  1:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("1:30pm");
                  }}
                >
                  1:30pm
                </p>
                <p
                  onClick={() => {
                    setBoard("2:00pm");
                  }}
                >
                  2:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("2:30pm");
                  }}
                >
                  2:30pm
                </p>
                <p
                  onClick={() => {
                    setBoard("3:00pm");
                  }}
                >
                  3:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("3:30pm");
                  }}
                >
                  3:30pm
                </p>
                <p
                  onClick={() => {
                    setBoard("4:00pm");
                  }}
                >
                  4:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("4:30pm");
                  }}
                >
                  4:30pm
                </p>
                <p
                  onClick={() => {
                    setBoard("5:00pm");
                  }}
                >
                  5:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("5:00pm");
                  }}
                >
                  5:30pm
                </p>
                <p
                  onClick={() => {
                    setBoard("6:00pm");
                  }}
                >
                  6:00pm
                </p>
                <p
                  onClick={() => {
                    setBoard("6:30pm");
                  }}
                >
                  6:30pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Dropoff</p>
      <div style={{ display: "flex", width: "100px", color: "lightgrey" }}>
        <p
          style={{
            border: "1px solid grey",
            padding: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i className="fa-regular fa-calendar-days"></i> Date
        </p>
        <div>
          <div
            style={{ width: "150px", border: "1px solid grey", padding: "5px" }}
          >
            <div
              className="onBoardButton"
              onClick={() => {
                setDisStyle1({ display: "block" });
              }}
            >
              <p>
                <i className="fa-regular fa-clock"></i> {aboard}
              </p>
            </div>
            <div
              className="durationDropdown"
              style={disStyle1}
              onClick={() => {
                setDisStyle1({ display: "none" });
              }}
            >
              <div
                //   className="durationDropdown"
                style={disStyle1}
                onClick={() => {
                  setDisStyle1({
                    display: "none",
                    height: "40px",
                    background: "red",
                    scrollBehavior: "inside",
                  });
                }}
              >
                <p
                  onClick={() => {
                    setAboard("8:00am");
                  }}
                >
                  8:00am
                </p>
                <p
                  onClick={() => {
                    setAboard("8:30am");
                  }}
                >
                  8:30am
                </p>
                <p
                  onClick={() => {
                    setAboard("9:00am");
                  }}
                >
                  9:00am
                </p>
                <p
                  onClick={() => {
                    setAboard("9:30am");
                  }}
                >
                  9:30am
                </p>
                <p
                  onClick={() => {
                    setAboard("10:00am");
                  }}
                >
                  10:00am
                </p>
                <p
                  onClick={() => {
                    setAboard("10:30am");
                  }}
                >
                  10:30am
                </p>
                <p
                  onClick={() => {
                    setAboard("11:00am");
                  }}
                >
                  11:00am
                </p>
                <p
                  onClick={() => {
                    setAboard("11:30am");
                  }}
                >
                  11:30am
                </p>
                <p
                  onClick={() => {
                    setAboard("12:00am");
                  }}
                >
                  12:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("12:30am");
                  }}
                >
                  12:30pm
                </p>
                <p
                  onClick={() => {
                    setAboard("1:00pm");
                  }}
                >
                  1:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("1:30pm");
                  }}
                >
                  1:30pm
                </p>
                <p
                  onClick={() => {
                    setAboard("2:00pm");
                  }}
                >
                  2:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("2:30pm");
                  }}
                >
                  2:30pm
                </p>
                <p
                  onClick={() => {
                    setAboard("3:00pm");
                  }}
                >
                  3:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("3:30pm");
                  }}
                >
                  3:30pm
                </p>
                <p
                  onClick={() => {
                    setAboard("4:00pm");
                  }}
                >
                  4:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("4:30pm");
                  }}
                >
                  4:30pm
                </p>
                <p
                  onClick={() => {
                    setAboard("5:00pm");
                  }}
                >
                  5:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("5:00pm");
                  }}
                >
                  5:30pm
                </p>
                <p
                  onClick={() => {
                    setAboard("6:00pm");
                  }}
                >
                  6:00pm
                </p>
                <p
                  onClick={() => {
                    setAboard("6:30pm");
                  }}
                >
                  6:30pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button style={{background:"yellow"}}>Search</button>
    </div>
  );
}
