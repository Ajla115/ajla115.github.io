import { motion } from "motion/react";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { getContactOptions } from "@data/contact";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "@/constants/theme";

const EMAIL =
   getContactOptions().find((option) => option.icon === "MdOutlineEmail")
      ?.value ?? "";

/**
 * Replaces the old EmailJS-backed form: a plain mailto CTA plus a
 * copy-to-clipboard fallback for clients that don't have a mail app wired up.
 */
const ContactCTA = () => {
   const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(EMAIL);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch {
         // Clipboard API unavailable -- the mailto link above still works.
      }
   };

   return (
      <div
         className="glass-card"
         style={{
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
            height: "100%",
            justifyContent: "center",
         }}
      >
         <h3 style={{ fontSize: 20, fontWeight: 700, color: TEXT_PRIMARY }}>
            Let's build something.
         </h3>
         <p
            style={{
               color: TEXT_SECONDARY,
               fontSize: 14,
               lineHeight: 1.7,
               maxWidth: 360,
            }}
         >
            Have a project, an internship, or a question about my work? My inbox
            is the fastest way to reach me.
         </p>
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               gap: 12,
               justifyContent: "center",
            }}
         >
            <motion.a
               href={`mailto:${EMAIL}`}
               className="btn-primary"
               style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
               }}
               whileTap={{ scale: 0.97 }}
               aria-label={`Send an email to ${EMAIL}`}
            >
               <Mail size={16} aria-hidden="true" />
               Email Me
            </motion.a>
            <motion.button
               type="button"
               onClick={handleCopy}
               className="btn-outline"
               style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
               whileTap={{ scale: 0.97 }}
               aria-label={`Copy email address ${EMAIL}`}
            >
               {copied ? (
                  <Check size={16} aria-hidden="true" />
               ) : (
                  <Copy size={16} aria-hidden="true" />
               )}
               {copied ? "Copied!" : "Copy Email"}
            </motion.button>
         </div>
      </div>
   );
};

export default ContactCTA;
