import React from 'react'
import ScrollReveal from '../../reactbits_component/ScrollReveal'
import FlowingMenu from '../../reactbits_component/FlowingMenu'
import AnimatedContent from '../../reactbits_component/AnimatedContent'
import SplitText from '../../reactbits_component/Split_Text'

const project_page = () => {
   const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  

 const projectset = [
    { mockupimg:"./mock_up/CIM_left.png",
      desc:"A centralized information and media platform Application with Data Analytics",
      logo:"./mock_up/CIM_logo.png",
      overlaystyle:"absolute inset-0 bg-gradient-to-r from-[#00a228] to-black opacity-20 z-0 pointer-events-none rounded-xl",
      site_url: "https://thesis-cim-23-xpwq.onrender.com/",
      btn_style: "btn btn-wide btn-circle bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] hover:bg-[#2E073F] mt-3 hover:btn-secondary shadow-glass text-slate-50",
      divider: [
      { link: '#', text: 'C I M', image: './mock_up/CIM_logo.png' }
    ]
    },

    { mockupimg:"./mock_up/evo_left.png",
      desc:"A timekeeping system that features a desktop and mobile application for Evotech software solution Inc.",
      logo:"./mock_up/evo_logo.gif",
      overlaystyle:"absolute inset-0 bg-gradient-to-r from-[#ff9505] to-black opacity-20 z-0 pointer-events-none rounded-xl",
      site_url: "",
      btn_style:"btn btn-wide btn-disabled dark:btn-soft btn-secondary dark:bg-[#EBD3F8] hover:bg-[#2E073F] mt-3 hover:text-white dark:text-gray-800 dark:btn-secondary btn-circle",
      divider: [
      { link: '#', text: 'EvoTKS', image: './mock_up/evo_logo.gif' }
    ]
      
    },

    { mockupimg:"./mock_up/covidective_mock_up.png",
      desc:"A information system with built in contact tracing form developed during the COVID-19 pandemic.",
      logo:"./mock_up/covidective_logo.png",
      overlaystyle:"absolute inset-0 bg-gradient-to-r from-[#00CAFF] to-black opacity-20 z-0 pointer-events-none rounded-xl",
      site_url: "https://covidective.webflow.io/",
      btn_style:"btn btn-wide btn-circle bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] hover:bg-[#2E073F] mt-3 hover:btn-secondary shadow-glass text-slate-50",
      divider: [
      { link: '#', text: 'COVIDective (Redesign)', image: './mock_up/covidective_logo.png' }
    ]
      
    },

    { mockupimg:"./mock_up/g_quipment_mock_up.png",
      desc:"A reservation management system for organized usage of gym equipment ",
      logo:"./mock_up/g_quipment_logo.png",
      overlaystyle:"absolute inset-0 bg-gradient-to-r from-[#4f4c4c] to-black opacity-20 z-0 pointer-events-none rounded-xl",
      site_url: "",
      btn_style:"btn btn-wide btn-disabled dark:btn-soft btn-secondary dark:bg-[#EBD3F8] hover:bg-[#2E073F] mt-3 hover:text-white dark:text-gray-800 dark:btn-secondary btn-circle",
      divider: [
      { link: '#', text: 'G-quipment', image: './mock_up/g_quipment_logo.png' }
    ]
      
    }
  ]

  return (
    <div className='w-full h-auto overflow-hidden'>

      <AnimatedContent>


         <div className=' overflow-y-hidden py-32'>

      <div className="flex flex-col text-center">
          <SplitText
            text="Projects"
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-semibold font-montserrat py-3"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />     

          <SplitText
            text="Notable projects that i have work on are:"
            className="font-montserrat text-lg pt-2 pb-10 sm:text-lg md:text-2xl lg:text-2xl xl:text-xl 2xl:text-xl"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />    

      </div>

      {projectset.map((project,index) =>(
        <div className="card mx-10 mb-10 w-auto backdrop-blur-glass bg-glass-dark dark:bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg" data-aos = "fade-left">
                      <div className='relative z-50 h-24 text-white '>
              <FlowingMenu items={project.divider} />
            </div>
       
          <div className="relative">


        
        
            <div className={project.overlaystyle}></div>

            <div className=" ">

              <div className="dov">
                              
              <img src={project.mockupimg} className='relative z-20 w-auto h-[70vh]' v data-aos="fade-up-right"/>
                
                <div className="absolute top-0 right-0 opacity-5">
                  <img src={project.logo} className='relative z-0 w-auto h-[60vh]  ' v data-aos="fade-up-right"/>
                </div>

              </div>


                <div className="absolute bottom-0 top-0 left-0 sm:left-0 md:left-1/2 lg:left-1/2 xl:left-1/2 2xl:left-1/2 z-30 p-10 text-end">
                
                  <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={5}
                      blurStrength={10}
                      className="relative z-0"
                    >
                    {project.desc}

                  </ScrollReveal>


                  <div className="div">
                    <a href={project.site_url} target="_blank" rel="noopener noreferrer">
                      <button className={project.btn_style}>Visit site</button>
                    </a>
                    
                  </div>
                </div>

            </div>




        
           </div>
      
 </div>
      ))}

    
       
        
    </div>
    

      </AnimatedContent>
    </div>
  )
}

export default project_page