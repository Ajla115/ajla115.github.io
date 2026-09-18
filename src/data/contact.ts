import type { ContactOption } from "@/types";
import contactData from "../../data/contact.json";

export const getContactOptions = (): ContactOption[] =>
   contactData.contact_options as ContactOption[];
