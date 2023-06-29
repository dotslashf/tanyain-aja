import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 bg-gray-100 sm:px-6 lg:px8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">
          {/* sign in to{" "} */}
          <span className="text-orange-400 ">tanyain-aja</span>
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
