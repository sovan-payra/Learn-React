import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  const squareRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = -e.clientX / 90;
      const y = -e.clientY / 90;

      if (squareRef.current) {
        squareRef.current.style.right = `${x}px`;
        squareRef.current.style.bottom = `${y}px`;
      }
    };

    const handleOrientation = (e) => {
      if (squareRef.current) {
        squareRef.current.style.right = `${e.gamma / 3}px`;
        squareRef.current.style.bottom = `${e.beta / 3}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div
      className="flex h-screen flex-col items-center justify-evenly overflow-hidden bg-[#1E0D37] text-white md:flex-row md:justify-between"
    >
      {/* Square Section */}
      <div
        ref={squareRef}
        className="relative flex w-full justify-center md:w-1/2"
      >
        <div
          className="flex  items-center justify-center rounded-2xl md:h-[20vw] md:w-[20vw]"
          style={{
            background: "#C2146D",
            transform: "rotate(-21deg)",
            boxShadow: `
              #760D50 0 0 5px 30px,
              #4D0E45 0 0 10px 60px,
              #320C3B 0 0 15px 90px,
              #280C3D 0 0 20px 120px,
              #1E0D37 0 0 25px 150px
            `,
          }}
        >
          <h1 className="select-none text-[70px] font-bold text-[#1E0D37] drop-shadow-lg md:text-[10vw]">
            404
          </h1>
        </div>
      </div>

      {/* Text Section */}
      <div className="z-10 w-full max-w-lg p-6">
        <h2 className="mb-4 text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mb-6 text-gray-300">
          The page you are looking for does not exist.
          Go back to the homepage or search for something else.
        </p>

        <Link
          to="/"
          className="rounded border border-white px-5 py-2 transition hover:bg-white hover:text-[#1E0D37]"
        >
          Back to Home
        </Link>

        <input
          type="search"
          placeholder="Search..."
          className="mt-6 block w-full rounded-lg border border-gray-500 bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-pink-500"
        />
      </div>
    </div>
  );
};

export default Notfound;