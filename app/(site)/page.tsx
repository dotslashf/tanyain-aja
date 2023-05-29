import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
      flex
      min-h-full
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px8
      bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          {/* sign in to{" "} */}
          <span
            className="
                text-orange-400
                "
          >
            tanyain-aja
          </span>
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
