import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center mt-10">
      {children}
    </div>
  );
};

export default AuthLayout;
