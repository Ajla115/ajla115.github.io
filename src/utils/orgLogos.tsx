import type { ReactNode } from "react";
import { FaAws } from "react-icons/fa";

/**
 * Real organization mark for experience/education cards.
 * Returns null when no official mark is available -- callers keep their
 * generic icon fallback so schools and small orgs still render fine.
 */
export const getOrgLogo = (name: string, size = 18): ReactNode => {
   if (name.includes("Amazon Web Services") || name.startsWith("AWS")) {
      return <FaAws size={size} color="#FF9900" aria-hidden="true" />;
   }
   return null;
};
