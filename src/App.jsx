import Card from "./Card";
import Profile from "./Profile";
import Socials from "./Socials";

export default function App() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-neutral-950
      flex justify-center items-center text-white"
    >
      <Card>
        <Profile />
        <Socials />
      </Card>
    </div>
  );
}