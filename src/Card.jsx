export default function Card({ children }) {
    return (
      <div
        className="w-[80%] max-w-96 rounded-2xl bg-neutral-900 p-8 m-8 
        flex flex-col justify-center items-center gap-4"
      >
        {children}
      </div>
    );
  }