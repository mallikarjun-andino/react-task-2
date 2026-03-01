import Form from "../components/Form";
import SignupInfoCard from "../components/SignupInfoCard";

function Signup() {
  return (
    <div className="h-2/3 w-2/3 flex items-start justify-start rounded-lg p-10 shadow-lg">
      <div className="h-full w-1/2 gap-8 p-10 bg-linear-to-br from-[#deaaff] to-[#7b2cbf] rounded-sm  flex flex-col items-start justify-start">
        <SignupInfoCard
          title="Quick and free sign-up"
          desc="Enter your Email address to create account."
        />
        <SignupInfoCard
          title="Cross platform solution"
          desc="Preview your newsletters on any device before sending them out"
        />
        <SignupInfoCard
          title="Quick and free sign-up"
          desc="Enter your Email address to create account."
        />
      </div>
      <Form />
    </div>
  );
}

export default Signup;
