import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorText = (error: unknown): string => {
    if (isRouteErrorResponse(error)) return error.statusText;
    if (error instanceof Error) return error.message;
    return 'Unknown error. Sorry <<bow>>'
  }
  
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorText(error)}</i>
      </p>
    </div>
  );
}