const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('../../../public/banner.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-4xl font-extrabold">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5 font-normal">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className=" flex justify-center gap-5">
              <button className="btn bg-[#0be58a] rounded-full border-none hover:bg-[#0be58a]">Explore Now</button>
              <button className="btn btn-outline text-white rounded-full hover:bg-transparent">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
