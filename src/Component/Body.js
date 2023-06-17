import React from "react";

function Body() {
  return (
    <>
      <div className="row bg-dark border border-danger">
        <div className="col text-center text-primary p-2">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="bg-dark">
        <br />
      </div>
      <div className="row bg-dark">
        <div className="col col-md-12 col-sm-12">
          <div className="d-flex justify-content-center">
            <div class="embed-responsive embed-responsive-16by9 ">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                style={{ width: "80vw", height: "80vh" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <br />
      </div>
    </>
  );
}

export default Body;
