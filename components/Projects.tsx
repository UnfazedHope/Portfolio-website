"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/vishportfolio.jpg",
    title: "College ERP System",
    description:
      "Developed a College ERP System using Django and SQLite, enhancing knowledge of web development and database management. Included features for students, staff, and HOD accounts. Implemented functionalities for staff to manage attendance, results, and reports, while enabling students to access their attendance and academic performance data.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Django",
      "JavaScript",
      "Chart.JS",
    ],
    link: "https://github.com/UnfazedHope/Django-ERP-System",
  },
  {
    imagePath: "/vishportfolio.jpg",
    title: "Serverless Notes Application",
    description:
      "Engineered a Serverless Notes Application using AWS Lambda, encompassing features like adding, deleting, searching, and retrieving notes, streamlined through the Serverless Framework. Enhanced the application with a custom spell checker for grammar and spelling errors, alongside a feature to count the total words in a note, leveraging advanced algorithmic solutions.",
    skills: [
      "AWS Lambda",
      "Postman",
      "Serverless",
    ],
    link: "https://github.com/UnfazedHope/Serverless-Application",
  },
  {
    imagePath: "/isa_web.jpg",
    title: "Indian Student Association - University of Utah - Official Website",
    description:
      "Spearheaded the development of the Indian Student Association UofU’s official website as the sole developer, showcasing community events through a responsive design. Employed HTML, CSS, JavaScript, and Bootstrap to create a user-friendly interface, enhancing engagement and accessibility for the student community.",
    skills: [
      "HTML", 
      "CSS", 
      "Javascript", 
      "Bootstrap", 
      "React",
    ],
    link: "https://indianstudentsatutah.org/",
  },
  {
    imagePath: "/vishportfolio.jpg",
    title: "Garbage Classifying Application Using Deep Learning Techniques",
    description:
      "Developed an Android application utilizing VGG-16, ResNet50, and Simple CNN models for distinguishing between garbage and non-garbage in roadside images, integrating transfer learning technique through which got the accuracy of up to 96%. Created functionality to automatically report the location to Firebase when an image is identified as garbage, enhancing environmental cleanliness efforts.",
    skills: [
      "Android", 
      "XML", 
      "Machine Learning",
      "Firebase",
    ],
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
