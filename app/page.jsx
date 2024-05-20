import AuthForm from "./components/AuthForm";

export default function Home() {
  return(
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 text-center justify-center sm-p-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Welcome to Customer DB</h1>
        <p className="text-lg md:text-xl text-white mb-6">Your place to manage your customers. Sign in to get started!</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mx-20">
        <AuthForm/>
      </div>
    </div>
  )
}