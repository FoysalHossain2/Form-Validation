import React from "react";

interface FieldProps {
  label?: string;
  children: React.ReactNode;
  htmlFor?: string;
  error?: { message: string };
}

const Field: React.FC<FieldProps> = ({ label, children, htmlFor }) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

interface ChildWithIdProps {
  id?: string;
}

const getChildId = (children: React.ReactNode): string | undefined => {
  const child = React.Children.toArray(
    children
  )[0] as React.ReactElement<ChildWithIdProps>;

  return child?.props?.id;
};

export default Field;
