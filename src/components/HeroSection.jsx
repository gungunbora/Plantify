import mainimage from  "../assets/images/plants.png";

const HeroSection =()=>{
    return(
        <section className="bg-[#eef6ec] min-h-screen flex items-center">
             <div className="max-w-7xl mx-auto px-24 flex items-center justify-between w-full">
            {/*LEFT */}
     <div className="max-w-2xl">
     <h1 className=" font-playfair text-[84px] font-bold text-[#3f6b4f] leading-[1.1]">
        HOME IS <br />
        WHERE <br />
        THE PLANTS <br />
        ARE
     </h1> 
     <p className="mt-10 text-[#4b5f52] text-base max-w-lg">
       Bring nature into your home with beautiful and healthy plants.
     </p>
     </div>

     {/*RIGHT */}
     <div className=" flex justify-end w-[45%]">
        <img src={mainimage} alt="mainimage" 
        className="w-[620px] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 
         animate-[float_8s_ease-in-out_infinite]" /> 
     </div>
     </div>
     </section>
    );
};
export default HeroSection;