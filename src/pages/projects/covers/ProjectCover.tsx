import { useRef, type CSSProperties } from "react";
import { getProjectCover } from "./coverRegistry";

interface ProjectCoverProps {
   projectId: number;
   title: string;
}

const FILL: CSSProperties = { position: "absolute", inset: 0 };

/**
 * 16:10 media slot at the top of a project card: a live repo screenshot.
 * Zooms subtly on card hover via the .project-cover-img class.
 */
const ProjectCover = ({ projectId, title }: ProjectCoverProps) => {
   const cover = getProjectCover(projectId, title);
   const frameRef = useRef<HTMLDivElement>(null);
   if (!cover) return null;

   const media = (
      <img
         src={cover.src}
         alt={`${title} screenshot`}
         loading="lazy"
         decoding="async"
         width={960}
         height={600}
         className="project-cover-img"
         style={{
            ...FILL,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
         }}
      />
   );

   return (
      <div
         ref={frameRef}
         className="project-cover"
         style={{
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "#0c1216",
         }}
      >
         {media}

         {/* Bottom fade so the media melts into the card body */}
         <div
            aria-hidden="true"
            style={{
               ...FILL,
               background:
                  "linear-gradient(180deg, transparent 55%, rgb(14 20 23 / 0.9) 100%)",
               pointerEvents: "none",
            }}
         />
      </div>
   );
};

export default ProjectCover;
