export type ToastVariant = "success" | "error" | "info";
export type ToastOptions = {
    message: string;
    duration?: number;
    variant?: ToastVariant;
};

export const DEFAULT_DURATION =3000;