// Small utility helpers used across the frontend
export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}

export const mergeClassNames = cn;

export default cn;
