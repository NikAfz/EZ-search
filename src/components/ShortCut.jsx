import react from '../../public/vite.svg'
function ShortCut(props) {
  if (props.name){

    return (
      <>
        <div
          className="test" 
          title={props.name} 
          onClick={()=> {window.open(props.URL, "_self");}}
        >
          {props.img? 
            <img className='shortcut--img' src={props.img} /> 
            :
            <p className='no-img--char'> {props.name.charAt(0)} </p>
          }
          <p className='cut--name'>{props.name}</p>
        </div>
      </>
    )
  }
};

export default ShortCut;
