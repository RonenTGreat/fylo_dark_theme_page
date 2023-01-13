const Feature = (props) => {
  return ( 
    <div className="mt-20">
      <img className="mx-auto w-16 mb-6" src={props.img} alt="" />
      <h3 className=" font-raleway text-white text-center font-semibold md:text-2xl">{props.head}</h3>
      <p className=" font-opensans text-gray-300 text-center text-sm mx-auto mt-2 max-w-xs">{props.description}</p>
    </div>
   );
}
 
export default Feature;