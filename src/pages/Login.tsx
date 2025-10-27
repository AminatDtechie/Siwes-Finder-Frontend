import LoginForm from "@/components/auth/LoginForm";
import watermark from "@/assets/bg-img.png";
import bgImg from "@/assets/hero-img.png";
import SEOHelmet from "@/engine/SEOHelmet";

const Login = () => {
  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SEOHelmet title="Login" />

      {/* Watermark Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${watermark})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          backgroundPosition: "center",
          pointerEvents: "none",
        }}
      ></div>

      <LoginForm />
    </div>
  );
};

export default Login;
