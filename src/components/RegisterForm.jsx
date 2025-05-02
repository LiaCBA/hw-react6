import { useForm } from "react-hook-form";
import astronautImage from "../assets/astronaut.png";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleForm = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      throw new Error("this email already exists");
    } catch (error) {
      setError("root", {
        message: "Here is some error",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[67px] bg-[#0A0D17] min-h-screen">
      <div className="text-white text-center">
        <h2 className="bg-[linear-gradient(89.29deg,#FFFFFF_49.86%,#763AF5_76.63%,#A604F2_104.63%)] bg-clip-text font-bold text-[81px] text-transparent">
          Get in touch
        </h2>
        <p className="text-[22px] text-white/70">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex bg-gray-900 p-[60px] border-[#0A0D170D] border-[2px] rounded-[20px] w-full max-w-[1256px] text-white">
        <div>
          <div className="mb-[41px]">
            <h2 className="mb-[8px] font-bold text-3xl">
              Let’s connect constellations
            </h2>
            <p className="w-[415px] text-white/70">
              Let’s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
          </div>

          <div className="flex gap-[14px] mb-[14px]">
            <div className="flex flex-col w-full max-w-[206px]">
              <input
                className="pt-[12px] pr-[10px] pb-[12px] pl-[10px] border border-white/20 rounded"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full max-w-[206px]">
              <input
                className="pt-[12px] pr-[10px] pb-[12px] pl-[10px] border border-white/20 rounded"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-[14px]">
            <input
              className="pt-[12px] pr-[10px] pb-[12px] pl-[10px] border border-white/20 rounded w-full max-w-[426px]"
              placeholder="Email"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.email && <span>{errors.email.message}</span>}
            </p>
          </div>

          <div className="mb-[14px]">
            <input
              className="pt-[12px] pr-[10px] pb-[12px] pl-[10px] border border-white/20 rounded w-full max-w-[426px]"
              placeholder="Phone Number"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.phone && <span>{errors.phone.message}</span>}
            </p>
          </div>

          <div className="mb-[14px]">
            <textarea
              className="pt-[12px] pr-[10px] pb-[12px] pl-[10px] border border-white/20 rounded w-full max-w-[426px] h-32 resize-none"
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.message && <span>{errors.message.message}</span>}
            </p>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-[linear-gradient(90deg,_#763AF5_0%,_#A604F2_117.18%)] pt-[12px] pr-[10px] pb-[12px] pl-[10px] rounded w-full max-w-[426px] text-white cursor-pointer">
            {isSubmitting ? "Sending..." : "Send it to the moon 🚀"}
          </button>
          {errors.root && (
            <div className="text-red-400">{errors.root.message}</div>
          )}
        </div>
        <img
          src={astronautImage}
          alt="Astronaut"
          className="ml-[60px] rounded-[12px] max-w-[516px] max-h-[536px]"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
