import GoogleButton from "../atoms/GoogleButton";
export default function LoginActions() {
  return (
    <div className="w-full flex flex-col items-center gap-6 mt-16 relative flex-1">
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm">
        <GoogleButton type="daftar" />
        <GoogleButton type="masuk" />
      </div>
    </div>
  );
}