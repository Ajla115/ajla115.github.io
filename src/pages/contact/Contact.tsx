import { motion } from "motion/react";
import { getContactOptions } from "@data/contact";
import { rotateInUp, staggerContainer } from "@utils/animations";
import { MAX_WIDTH_FORM } from "@/constants/theme";
import useBreakpoint from "@hooks/useBreakpoint";
import PageSection from "@components/layout/PageSection";
import ContactCard from "./ContactCard";
import ContactCTA from "./ContactCTA";

const Contact = () => {
   const { isMobile } = useBreakpoint();
   const contactOptions = getContactOptions();

   return (
      <PageSection
         id="contact"
         title="Get In Touch"
         subtitle="Let's work together"
         maxWidth={MAX_WIDTH_FORM}
      >
         <motion.div
            style={{
               maxWidth: MAX_WIDTH_FORM,
               margin: "0 auto",
               display: "grid",
               gap: isMobile ? 24 : 32,
               gridTemplateColumns: isMobile ? "1fr" : "2fr 3fr",
            }}
            variants={staggerContainer}
         >
            {/* Contact Options - Left Column */}
            <motion.div
               style={{ display: "flex", flexDirection: "column", gap: 12 }}
               variants={staggerContainer}
            >
               {contactOptions.map((option) => (
                  <ContactCard
                     key={option.id}
                     option={option}
                     isMobile={isMobile}
                  />
               ))}
            </motion.div>

            {/* CTA - Right Column */}
            <motion.div variants={rotateInUp}>
               <ContactCTA />
            </motion.div>
         </motion.div>
      </PageSection>
   );
};

export default Contact;
