import ClearIcon from "@mui/icons-material/Clear";
import { red } from "@mui/material/colors";

function ShortCut(props) {
  function handleRemove(params) {
    const updatedData = props.data.filter((item) => item.id !== props.id);

    props.setData(updatedData);
    localStorage.setItem("shortCutKey", JSON.stringify(updatedData));
  }

  return (
    <>
      <div
        className="test"
        title={props.name}
        onClick={() => {
          window.open(props.URL, "_self");
        }}
      >
        <div
          className="shortcut-remove"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the event from bubbling up
            handleRemove(); // Call the remove function
          }}
        >
          <ClearIcon sx={{ color: red[500] }} />
        </div>
        {props.img ? (
          <img className="shortcut--img" src={props.img} />
        ) : (
          <p className="no-img--char"> {props.name.charAt(0)} </p>
        )}
        <p className="cut--name">{props.name}</p>
      </div>
    </>
  );
}

export default ShortCut;
