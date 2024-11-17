import { CardHeader, CardTitle } from "~/components/ui/card";

interface LoginFormHeaderProps {
  text: string;
}

export const LoginFormHeader = ({ text }: LoginFormHeaderProps) => {
  return (
    <CardHeader className="space-y-1 text-center">
      <CardTitle className="text-3xl font-bold text-gray-100 flex items-center justify-center gap-2">
        <span className="bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text">
          {text}
        </span>
      </CardTitle>
    </CardHeader>
  );
};
