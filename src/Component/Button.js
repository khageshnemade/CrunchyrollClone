import React from "react";

function Button() {
  return (
    <>
      <div
        class="btn-toolbar bg-dark justify-content-center"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-primary">
            1
          </button>
          <button type="button" class="btn btn-primary">
            2
          </button>
          <button type="button" class="btn btn-primary">
            3
          </button>
          <button type="button" class="btn btn-primary">
            4
          </button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Button;
