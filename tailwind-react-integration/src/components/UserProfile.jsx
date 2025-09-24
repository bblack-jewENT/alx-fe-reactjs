function UserProfile() {
  return (
    <div>
      <div className="bg-gray-100 sm:p-4 md:p-8 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg">
        <img
          className="rounded-full hover:scale-110 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out"
          src="https://images.stockcake.com/public/e/e/6/ee6071b7-ef42-45e4-ba8c-9fc44bbdfa22_large/coding-at-night-stockcake.jpg"
          alt="User"
        />
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base">
          Developer at Example Co. Loves to write code and explore new
          technologies.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;


