import { Check } from "lucide-react";

type SignupInfoCardProps = {
  title: string;
  desc: string;
};

function SignupInfoCard({ title, desc }: SignupInfoCardProps) {
  return (
    <div className="text-white flex flex-col p-1 gap-2 w-2/3 test-wrap">
      <div className="bg-white/40 w-fit rounded-full p-1">
        <Check size={15} />
      </div>
      <h1 className="text-[20px]">{title}</h1>
      <p className="text-[10px]">{desc}</p>
    </div>
  );
}

export default SignupInfoCard;
