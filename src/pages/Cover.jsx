import Logo from "../assets/img/Logo.png"
import Cloud from "../assets/img/Componets-Cover/4.png"
export default function Cover({ fadeOut }) {
  return( 
    <>
    <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(180deg,#90D7F5_0%,#FFF_126.58%)] ">
  <div className="w-[393px] h-[852px] max-w-[393px] max-h-[852px] bg-[linear-gradient(180deg,#90D7F5_0%,#FFF_126.58%)] mx-auto flex flex-col items-center justify-center overflow-hidden fixed">
    <img src={Cloud} alt="" className="absolute top-0 w-52 mt-10" />
    <img src={Logo} alt="Logo" />
      <img src={Cloud} alt="" className="absolute bottom-0 ml-[-9rem] mb-[-6rem] rotate-[169.31deg]" />
  </div>
</div>
    </>
  );
} 