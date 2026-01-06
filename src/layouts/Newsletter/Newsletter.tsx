import { useId, useState, type ChangeEvent } from "react";
import Button from "../../Components/Button/Button";
import clsx from "clsx";
import z from "zod";

const Email = z.object({
  email: z.email(),
});

const Newsletter = () => {
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
      console.log(result.data);
    }
  };
  const handleBlur = () => {
    setInteracted(true);
    const result = Email.safeParse({ email });
    if (!result.success) {
      setError(true);
    } else {
      setError(false);
      console.log(result.data);
    }
  };
  return (
    <div className="bg-blue-600 pt-12.25 px-8 min-h-90">
      <form
        className="mx-auto max-w-110.5"
        aria-labelledby={formId}
        noValidate
        action="/"
        method="post"
      >
        <hgroup className="text-white text-center">
          <p className="text-3-mobile-medium md:text-6-semibold uppercase">
            35,000+ already joined
          </p>
          <h2 className="text-1-mobile md:text-2 md:mt-6" id={formId}>
            Stay up-to-date with what we’re doing
          </h2>
        </hgroup>
        <div className="flex flex-col md:flex-row  gap-4 mt-8">
          <div
            className={clsx(
              "w-full rounded-[0.3125rem]",
              isError && "bg-red-400"
            )}
          >
            <label htmlFor={emailId}>
              <span className="sr-only">email</span>
            </label>
            <input
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={clsx(
                "outline-none w-full h-12 px-4 md:px-6 bg-white text-blue-950/25 text-2-mobile-regular md:text-6-regular rounded-[0.3125rem]",
                isError && "border-2 border-red-400 px-3.5 md:px-5.5 "
              )}
              id={emailId}
              placeholder="enter your email adress"
            />
            <span
              className="block text-7 italic text-white ms-3.5 pb-1.5 pt-1"
              aria-live="polite"
            >
              {isError && "Whoops, make sure it’s an email"}
            </span>
          </div>
          <Button className="px-6 shrink-0" variant="submit" type="button">
            contact us
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
