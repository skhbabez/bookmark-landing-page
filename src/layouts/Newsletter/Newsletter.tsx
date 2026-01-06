import { useId } from "react";
import Button from "../../Components/Button/Button";
import clsx from "clsx";

const Newsletter = () => {
  const emailId = useId();
  const formId = useId();
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
          <div className="w-full bg-red-400 rounded-[0.3125rem]">
            <label htmlFor={emailId}>
              <span className="sr-only">email</span>
            </label>
            <input
              className={clsx(
                "outline-none w-full h-12 px-4 md:px-6 bg-white text-blue-950 text-2-mobile-regular md:text-6-regular rounded-[0.3125rem]",
                "border-2 border-red-400 px-3.5 md:px-5.5 "
              )}
              id={emailId}
              placeholder="enter your email adress"
            />
            <span
              className="block text-7 italic text-white ms-3.5 pb-1.5 pt-1"
              aria-live="polite"
            >
              Whoops, make sure it’s an email
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
