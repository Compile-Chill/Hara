"use client";

import { useState, useEffect } from "react";
import useLanguage from "@/hooks/useLanguage";
import { z } from "zod";

interface Step1PersonalInfoProps {
  onNext: () => void;
}

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:ring-2 focus:ring-[#7da3c1] focus:outline-none";

const personalInfoSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
  birthday: z.string().min(1),
  age: z.string().min(1),
  countryCode: z.string().regex(/^\d+$/, "Must be numeric"),
  phone: z.string().regex(/^\d+$/, "Must be numeric"),
  gender: z.string().min(1),
  country: z.string().min(1),
  city: z.string().min(1),
  email: z.string().email(),
});

export default function Step1PersonalInfo({ onNext }: Step1PersonalInfoProps) {
  const { messages } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
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
    const result = personalInfoSchema.safeParse(formData);
    setIsValid(result.success);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if ((name === "phone" || name === "countryCode") && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full px-6 py-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2b3e50] mb-6 border-b border-[#c3d8e6] pb-2">
        {messages?.form?.step1?.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <Field
          name="firstName"
          label={messages?.form?.step1?.firstName}
          value={formData.firstName}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Middle Name */}
        <Field
          name="middleName"
          label={messages?.form?.step1?.middleName}
          value={formData.middleName}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Last Name con col-span-2 */}
        <div className="md:col-span-2">
          <Field
            label={messages?.form?.step1?.lastName}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Birthday */}
        <Field
          name="birthday"
          label={messages?.form?.step1?.birthday}
          type="date"
          value={formData.birthday}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Age */}
        <Field
          name="age"
          label={messages?.form?.step1?.age}
          type="number"
          value={formData.age}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Country Code */}
        <Field
          name="countryCode"
          label={messages?.form?.step1?.countryCode}
          value={formData.countryCode}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Phone */}
        <Field
          name="phone"
          label={messages?.form?.step1?.phone}
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Country */}
        <Field
          name="country"
          label={messages?.form?.step1?.country}
          value={formData.country}
          onChange={handleChange}
          className={inputClass}
        />

        {/* City */}
        <Field
          name="city"
          label={messages?.form?.step1?.city}
          value={formData.city}
          onChange={handleChange}
          className={inputClass}
        />

        {/* Gender */}
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

        {/* Email */}
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