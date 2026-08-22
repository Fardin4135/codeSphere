import { useForm } from "react-hook-form";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  ageGroup: string;
  category: string;
  course: string;
  message: string;
}

export default function InquirySection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Inquiry:", data);

    // Later we will connect this to your backend API.
    reset();
  };

  return (
    <section
      id="inquiry"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Start Learning"
          title="Have questions? Let's talk."
          description="Tell us what you're looking to learn and our team can help you find the right program."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
            <h3 className="text-2xl font-bold">
              Let's find the right learning path.
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Whether you're a parent looking for coding lessons
              for your child or an adult looking to develop new
              professional skills, send us an enquiry.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Personalised Guidance
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Discuss your learning goals with us.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Mail size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Quick Response
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    We'll get back to you about the next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            {isSubmitSuccessful && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300">
                <CheckCircle2 size={18} />
                Thanks! Your enquiry has been received.
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full Name"
                placeholder="Your name"
                error={errors.name?.message}
                {...register("name", {
                  required: "Name is required",
                })}
              />

              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />

              <Input
                label="Phone / WhatsApp"
                placeholder="+44..."
                {...register("phone")}
              />

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Country
                </label>

                <select
                  {...register("country", {
                    required: "Please select a country",
                  })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select country</option>
                  <option value="uk">
                    United Kingdom
                  </option>
                  <option value="india">
                    India
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>

                {errors.country && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Age Group
                </label>

                <select
                  {...register("ageGroup")}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select age group</option>
                  <option value="10-13">10–13</option>
                  <option value="14-17">14–17</option>
                  <option value="18+">18+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Learning Category
                </label>

                <select
                  {...register("category")}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="kids">
                    Kids Zone
                  </option>
                  <option value="adult">
                    Adult Programs
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Course Interested In
                </label>

                <select
                  {...register("course")}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select a course</option>
                  <option value="python">
                    Python
                  </option>
                  <option value="cpp">
                    C++
                  </option>
                  <option value="java">
                    Java
                  </option>
                  <option value="web">
                    Web Development
                  </option>
                  <option value="dsa">
                    DSA
                  </option>
                  <option value="ai-ml">
                    AI & ML
                  </option>
                  <option value="devops">
                    DevOps
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us what you would like to learn..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-blue-500 px-6 py-3.5 font-semibold transition hover:bg-blue-400"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({
  label,
  error,
  ...props
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
      />

      {error && (
        <p className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}