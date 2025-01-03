export type FormState =
  | {
      errors?: {
        staffCode?: number;
      };
      message?: string;
    }
  | undefined;
