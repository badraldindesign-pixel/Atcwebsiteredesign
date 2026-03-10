import svgPaths from "../imports/svg-uwmjagjyxp";
import imgImage from "figma:asset/6de002cd6706b13e9c38d5e11fd95aaeaf9fe17a.png";

export function Hero() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[660px] relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      
      {/* Background Image */}
      <div className="absolute h-[660px] left-0 pointer-events-none top-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage} />
        <div aria-hidden="true" className="absolute border-0 border-[#bdc1ca] border-solid inset-0" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute h-[660px] left-0 top-0 w-full" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 20.533%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.137) 35.577%, rgba(0, 0, 0, 0.06) 68.269%, rgba(0, 0, 0, 0.14) 100%)" }}>
        <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      </div>
      
      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-[112px] top-[364px] w-[1216px]">
        {/* Heading and Buttons */}
        <div className="content-stretch flex gap-[305px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[672px]">
            <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
              <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[32px] text-gray-100 w-[min-content]" dir="auto">
                Building Resilient Infrastructure & Sustainable Solutions
              </p>
            </div>
            
            {/* Buttons */}
            <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                <button className="bg-[darkorange] relative rounded-[32px] shrink-0" data-name="Button 18">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[inherit]">
                    <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Free Consultation</p>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px]" />
                </button>
              </div>
              
              <button className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.18)] relative rounded-[32px] shrink-0" data-name="Button">
                <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[inherit]">
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre" dir="auto">
                    Our Projects
                  </p>
                </div>
                <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px]" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Service Categories with Progress Indicators */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          {/* Constructions & Engineering */}
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full" data-name="Line">
                <div className="absolute inset-[-0.75px_-0.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 2">
                    <path d="M0.75 0.75L292.75 0.750026" id="Line" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.7" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-0 left-0 top-1/2 translate-y-[-50%] w-[292px]" data-name="Line">
                <div className="absolute inset-[-1.5px_-0.51%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 3">
                    <path d="M1.5 1.5H293.5" id="Line" stroke="var(--stroke-0, #FFBF51)" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white w-full" dir="auto">Constructions & Engineering</p>
          </div>
          
          {/* Agriculture & Animal Production */}
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full" data-name="Line">
                <div className="absolute inset-[-0.75px_-0.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 2">
                    <path d="M0.75 0.75L292.75 0.750026" id="Line" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-0 left-0 top-1/2 translate-y-[-50%] w-[40px]" data-name="Line">
                <div className="absolute inset-[-1.5px_-3.75%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
                    <path d="M1.5 1.5H41.5" id="Line" stroke="var(--stroke-0, #FFBF51)" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white w-full" dir="auto">Agriculture & Animal Production</p>
          </div>
          
          {/* Infrastructure & Renewable Energy */}
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full" data-name="Line">
                <div className="absolute inset-[-0.75px_-0.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 2">
                    <path d="M0.75 0.75L292.75 0.750026" id="Line" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-0 left-0 top-1/2 translate-y-[-50%] w-[40px]" data-name="Line">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Line"></g>
                </svg>
              </div>
            </div>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white w-full" dir="auto">Infrastructure & Renewable Energy</p>
          </div>
          
          {/* Reading & Logistic */}
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full" data-name="Line">
                <div className="absolute inset-[-0.75px_-0.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 2">
                    <path d="M0.75 0.75L292.75 0.750026" id="Line" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-0 left-0 top-1/2 translate-y-[-50%] w-[40px]" data-name="Line">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Line"></g>
                </svg>
              </div>
            </div>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white w-full" dir="auto">Reading & Logistic</p>
          </div>
        </div>
      </div>
    </div>
  );
}
