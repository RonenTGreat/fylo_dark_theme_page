const Testimonial = (props) => {
  return ( 
    <div className=" p-6 text-g bg-testi-color mb-8 rounded-md">
      <p className=" font-opensans text-gray-300 max-w-ms pb-7">
        {props.description}
      </p>
      <div className="flex gap-3">
        <img src={props.profile} className="rounded-full w-10" alt="" />

        <div>
          <h3 className="font-opensans text-white font-bold">{props.name}</h3>
          <p className=" text-gray-300 text-xs">{props.title}</p>
        </div>
      </div>
    </div>
   );
}
 
export default Testimonial;