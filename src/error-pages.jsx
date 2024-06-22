import { useRouteError } from "react-router-dom";

export default function ErrorPage({ children }) {
  const error = useRouteError();
  console.error(error);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] bg-dark text-white">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="italic font-bold text-2xl">
          {error.statusText || error.message}
        </p>
      </div>
    );
  }

  return children;
}
