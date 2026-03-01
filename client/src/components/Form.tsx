import { useState } from "react";

type formDataInterface = {
  email: string;
  fullname: string;
  password: string;
  updatesEnabled: boolean;
};

const Form = () => {
  const [formData, setFormData] = useState<formDataInterface>({
    email: "",
    fullname: "",
    password: "",
    updatesEnabled: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      fullname: "",
      password: "",
      updatesEnabled: false,
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center text-black w-2/3 rounded-lg">
      <form
        className="flex flex-col items-start gap-5 w-full px-20 "
        onClick={handleSubmit}
      >
        <h1 className="text-4xl">Create your account</h1>
        <div className="text-sm text-[#6a6a6a] w-full flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="p-3 text-start text-xs border border-[#d8d3d3] w-full rounded-[10px] "
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="text-sm text-[#6a6a6a] w-full flex flex-col gap-1">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="name"
            name="fullname"
            className="p-3 text-start text-xs border border-[#d8d3d3] w-full rounded-[10px] "
            placeholder="Enter your fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="text-sm text-[#6a6a6a] w-full flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-3 text-start text-xs border border-[#d8d3d3] w-full rounded-[10px] "
            placeholder="Enter your email address"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="text-sm text-[#6a6a6a] w-full flex gap-3 items-center justify-center">
          <input
            type="checkbox"
            name="updatesEnabled"
            className="border border-[#d8d3d3] accent-[#deaaff] p-1"
            placeholder="Enter your email address"
            checked={formData.updatesEnabled}
            onChange={handleChange}
          />
          <label htmlFor="check">
            Get updates and notifications about product.
          </label>
        </div>

        <button className="bg-[#9c3dd7] text-white px-6 py-3 roundes-[20px] mt-5 rounded-[10px] w-full text-center">
          Type to create a password
        </button>
      </form>
    </div>
  );
};

export default Form;
