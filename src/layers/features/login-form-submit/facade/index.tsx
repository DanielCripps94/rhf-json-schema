export const LoginFormSubmitElement = ({ text }: { text: string }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      {text}
    </button>
  );
};
