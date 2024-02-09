const ErrorDisplay = ({ error = "Unknown error." }: { error: string }) => {
  return (
    <div className="text-red-500 self-center fixed bottom-10">{error}</div>
  );
};

export default ErrorDisplay;
