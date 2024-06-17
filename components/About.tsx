"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
        I&#39;m a passionate Software Engineer with a talent for developing innovative software solutions. 
        Having completed my Master's degree in Computer Science at the University of Utah, 
        I bring a rich background in programming languages, including Java, Python, SQL, and C/C++. 
        My experience spans various cloud platforms such as AWS and Google Cloud, enhancing my ability to 
        design and deploy robust applications.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
        Throughout my journey, I have enjoyed exploring full-stack development, mobile development, and cloud technologies. 
        I&#39;m a jack of all trades, trying to become a master of one. My career highlights include impactful roles like 
        improving the user experience at {" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://www.ptc.com/en"
            target="blank"
            rel="noopener noreferrer"
          >
            PTC Software
          </a>{" "} and spearheading significant web and app development projects.

        </p>

        <p className="text-start text-muted-foreground lg:px-6">
        I am now seeking full-time opportunities starting in June 2024, where I can apply my diverse skill set and 
        enthusiasm for technology to create impactful solutions. I am particularly excited about roles that challenge me to push 
        the boundaries of innovation and allow me to contribute to meaningful projects. 
        Let's connect to explore how we can collaborate and drive technological advancements together!
        </p>



      </div>
    </section>
  );
}
