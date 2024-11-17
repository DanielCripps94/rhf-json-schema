import React, { useState } from "react";
import { Input } from "~/layers/shared/components/ui/input";

interface PhoneInputProps {
  prefix?: string;
  onChange?: (value: string) => void;
}

export default function PhoneWidget({
  prefix = "+1",
  onChange,
}: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    if (onChange) {
      onChange(prefix + value);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex">
        <Input
          type="text"
          value={prefix}
          readOnly
          className="w-16 rounded-r-none bg-muted text-center bg-gray-500 text-white px-2 py-1"
        />
        <Input
          id="phone"
          type="number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneChange}
          className="flex-1 rounded-l-none bg-gray-500 text-white px-2 py-1"
        />
      </div>
    </div>
  );
}
