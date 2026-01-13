import clsx from "clsx";
import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

interface DialogProps extends ComponentPropsWithoutRef<"dialog"> {
  isOpen: boolean;
}

const Dialog = ({ isOpen, className, children, ...props }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (dialog.open && !isOpen) {
        dialog.close();
      } else if (!dialog.open && isOpen) {
        dialog.showModal();
      }
    }
  }, [isOpen]);
  return (
    <dialog ref={dialogRef} className={clsx("", className)} {...props}>
      {children}
    </dialog>
  );
};

export default Dialog;
