import { TextFieldVariants, TextFieldPropsSizeOverrides } from "@mui/material/TextField";
import { OverridableStringUnion } from "@mui/types";

// exporting prop types for searchbar
export type ISearchBar = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  variant?: TextFieldVariants | undefined;
  value: string;
  size?: OverridableStringUnion<"small" | "medium", TextFieldPropsSizeOverrides> | undefined;
};
