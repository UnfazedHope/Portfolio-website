"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Jan 2023 — May 2024",
    currentPosition: "Graduate Teaching Assistant",
    place: "University of Utah",
    previousPositions: [""],
    description:
      "Served as a Teaching Assistant for course Web Software Development. Responsibilities include developing engaging course content, addressing student inquiries, grading assignments and exams, and conducting one-on-one sessions to resolve students' doubts.",
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "HTML",
      "FastAPI",
      "Django",
      "SQLite",
      "Python",
    ],
  },
  {
    timeline: "Aug 2021 - May 2022",
    currentPosition: "Research and Development Intern",
    place: "PTC",
    previousPositions: [""],
    description:
      "Core Mobile App Development (Android) Intern within the Onshape Team of PTC, focusing on the Onshape CAD App. Managed database operations, REST APIs, and collaborated with UI/UX developers to refine product design. Led the redesign and implementation of a cutting-edge login flow for the Onshape CAD app, optimizing API integration and improving user experience metrics by streamlining authentication processes and reducing login times by 40%.",
    skills: [
      "Java",
      "Android Development",
      "XML",
      "Firebase",
      "OOP",
      "Agile",
      "REST API",
      "Kotlin",
    ],
  },
  {
    timeline: "Jun 2021 - Aug 2021",
    currentPosition: "Academic Intern",
    place: "Persistent Systems",
    previousPositions: [""],
    description:
      "Computer science fundamentals training and practice on coding and algorithms, computer networks, system design, object-oriented programming.",
    skills: [
      "OOP",
      "Algorithms",
      "Problem-Solving",
      "Computer Systems",
      "Networking",
      "System Design",
      "Cloud Computing",
      "Operating System",
    ],
  },
  {
    timeline: "Aug 2020 - Oct 2020",
    currentPosition: "Web Development Intern",
    place: "vCoach Academy(formerly ReDockto)",
    previousPositions: [""],
    description:
      "Engineered and deployed the company website, integrating daily widgets and collaborating closely with the design and operations teams to enhance the site's structure and design. Utilized Firebase for real-time updates.Integrated Google Analytics to track user geography, enabling data-driven decisions for deploying targeted updates and improvements through Firebase.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Firebase",
      "Google Analytics",
      "SEO",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/resume.pdf" target="_blank"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
