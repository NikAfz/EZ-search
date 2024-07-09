import { useEffect, useState } from "react";

function CustomText(props) {

  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    if (props.backgroundColor === 'p') {
      setBackgroundColor('custom-text-p');
    }
    else if(props.backgroundColor === 'g'){
      setBackgroundColor("custom-text-g")
    }
    else if(props.backgroundColor === 'r'){
      setBackgroundColor("custom-text-r")
    }
    else if(props.backgroundColor === 'b'){
      setBackgroundColor("custom-text-b")
    }
  },[props.backgroundColor])

  return (
    <>
      <div className={`custom-text--container ${backgroundColor}`}>
        <p className="custom-text">{props.customText}</p>
      </div>
    </>
  )
};

export default CustomText;
