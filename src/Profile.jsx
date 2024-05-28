import profile from "./assets/profile.png";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          className="rounded-full h-28 w-28"
          src={profile}
          alt="Zah Rainy Raushana Kuwada"
        />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-xl font-bold ">Zah Rainy Raushana Kuwada</h1>
          <p className="text-base text-violet-400 font-bold">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
      <p>&quot;Web Enthusiast &quot;</p>
    </>
  );
}