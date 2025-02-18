import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState, ReactNode } from "react";

interface ToastContextType {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  handleClose: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const handleClose = () => setOpen(false);

  const showSuccess = (message: string) => {
    setMessage(message);
    setSeverity("success");
    setOpen(true);
  };

  const showError = (message: string) => {
    setMessage(message);
    setSeverity("error");
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ showSuccess, showError, handleClose }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
