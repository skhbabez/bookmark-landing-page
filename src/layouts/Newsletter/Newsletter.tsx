import {
  useId,
  useState,
  type ChangeEvent,
  type ComponentPropsWithRef,
} from "react";
import Button from "../../Components/Button/Button";
import clsx from "clsx";
import z from "zod";
import { FaCircleExclamation } from "react-icons/fa6";

const Email = z.object({
  email: z.email(),
});

const Newsletter = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const emailId = useId();
  const formId = useId();
  const [isError, setError] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [email, setEmail] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const result = Email.safeParse({ email: value });
    setEmail(value);
    if (!result.success && interacted) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleBlur = () => {
    setInteracted(true);
    const result = Email.safeParse({ email });
    if (!result.success) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div
      className={clsx("bg-blue-600 pt-12.25 px-8 min-h-90", className)}
      {...props}
    >
      <form
        className="mx-auto max-w-110.5"
        aria-labelledby={formId}
        noValidate
        action="/"
        method="post"
      >
        <hgroup className="text-white text-center">
          <p className="text-3-mobile-medium md:text-6-semibold text-white uppercase">
            35,000+ already joined
          </p>
          <h2 className="text-1-mobile md:text-2 md:mt-6" id={formId}>
            Stay up-to-date with what we’re doing
          </h2>
        </hgroup>
        <div className="flex flex-col items-start md:flex-row gap-4 mt-8">
          <div
            className={clsx(
              "w-full rounded-[0.3125rem]",
              isError && "bg-red-400"
            )}
          >
            <label htmlFor={emailId}>
              <span className="sr-only">email</span>
            </label>
            <div className="relative">
              <input
                value={email}
                autoComplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={clsx(
                  "outline-none w-full h-12 px-4 md:px-6 bg-white text-blue-950/75 text-2-mobile-regular md:text-6-regular rounded-[0.3125rem] pe-14",
                  isError && "border-2 border-red-400 px-3.5 md:px-5.5 "
                )}
                id={emailId}
                placeholder="enter your email adress"
              />
              <FaCircleExclamation
                size={20}
                className={clsx(
                  "text-red-400 absolute right-4 top-1/2 -translate-y-1/2 hidden",
                  isError && "inline"
                )}
              />
            </div>
            <span
              className="block text-7 italic text-white ms-3.5 pb-1.5 pt-1"
              aria-live="polite"
            >
              {isError && "Whoops, make sure it’s an email"}
            </span>
          </div>
          <Button
            className="max-md:w-full px-6 shrink-0"
            variant="submit"
            type="button"
          >
            contact us
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
