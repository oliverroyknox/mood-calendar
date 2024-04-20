import { FC } from "react";
import { ErrorBoundary, ErrorBoundaryProps } from "react-error-boundary";
import { Outlet } from "react-router-dom";

export const ErrorBoundaryOutlet: FC<ErrorBoundaryProps> = (props) => {
  return (
    <ErrorBoundary {...props}>
      <Outlet />
    </ErrorBoundary>
  );
};
