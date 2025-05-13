"use client";

import { useState, useEffect } from "react";
import useLanguage from "@/hooks/useLanguage";

interface Step1PersonalInfoProps {
  onNext: () => void;
}

export default function Step1PersonalInfo({ onNext }: Step1PersonalInfoProps) {
  const { messages } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    secondLastName: "",
    birthday: "",
    age: "",
    countryCode: "",
    phone: "",
    gender: "",
    country: "",
    city: "",
    email: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const {
      firstName,
      lastName,
      secondLastName,
      birthday,
      age,
      countryCode,
      phone,
      gender,
      country,
      city,
      email,
    } = formData;

    const onlyNumbers = /^\d+$/;
    const allFieldsFilled =
      firstName &&
      lastName &&
      secondLastName &&
      birthday &&
      age &&
      countryCode &&
      phone &&
      gender &&
      country &&
      city &&
      email &&
      onlyNumbers.test(phone) &&
      onlyNumbers.test(countryCode);

    setIsValid(!!allFieldsFilled);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if ((name === "phone" || name === "countryCode") && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const inputClass =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:ring-2 focus:ring-[#7da3c1] focus:outline-none";

  return (
    <div className="w-full px-6 py-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2b3e50] mb-6 border-b border-[#c3d8e6] pb-2">
        {messages?.form?.step1?.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label={messages?.form?.step1?.firstName}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={inputClass}
        />
        <Field
          label={messages?.form?.step1?.middleName}
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          className={inputClass}
        />
        <Field
          label={messages?.form?.step1?.lastName}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={inputClass}
        />
        <Field
          label={messages?.form?.step1?.secondLastName}
          name="secondLastName"
          value={formData.secondLastName}
          onChange={handleChange}
          className={inputClass}
        />

        <Field
          label={messages?.form?.step1?.birthday}
          name="birthday"
          type="date"
          value={formData.birthday}
          onChange={handleChange}
          className={inputClass}
        />
        <Field
          label={messages?.form?.step1?.age}
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          className={inputClass}
        />

        <Field
          label={messages?.form?.step1?.countryCode}
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className={inputClass}
        />
        <Field
          label={messages?.form?.step1?.phone}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#2b3e50] mb-1">
            {messages?.form?.step1?.gender}
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled hidden></option>
            <option value="female">{messages?.genderOptions?.female}</option>
            <option value="male">{messages?.genderOptions?.male}</option>
            <option value="non-binary">{messages?.genderOptions?.nonBinary}</option>
            <option value="prefer-not-to-say">{messages?.genderOptions?.preferNotToSay}</option>
          </select>
        </div>

        <Field
          label={messages?.form?.step1?.country}
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={inputClass}
        />
        <Field
          label={messages?.form?.step1?.city}
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={inputClass}
        />

        <div className="md:col-span-2">
          <Field
            label={messages?.form?.step1?.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onNext}
          disabled={!isValid}
          className="w-28 bg-[#7da3c1] hover:bg-[#6b92b1] text-white px-5 py-2 rounded-md text-sm shadow-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {messages?.form?.step1?.next}
        </button>
      </div>
    </div>
  );
}

// Reusable component
function Field({
  label,
  name,
  value,
  onChange,
  className,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  className: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2b3e50] mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}
