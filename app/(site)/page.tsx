import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full px-6 py-12 bg-slate-100 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          {/* sign in to{" "} */}
          <span className="text-primary">tanyain-aja</span>
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
