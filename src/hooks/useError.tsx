import React, { useContext, useState } from 'react';

interface IErrorContext {
  error: string | null;
  dispatchError(message: any): void;
}

const ErrorContext = React.createContext<IErrorContext | null>(null);

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string | null>(null);
  const dispatchError = (message: any) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 6000);
  };

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const error = useContext(ErrorContext);
  if (!error) throw Error('useError needs to be used inside ErrorContext');

  return error;
};
