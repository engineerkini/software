import React from 'react';

const ProfileCard = () => {
  return (
    <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
      {/* Profile Image */}
      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden z-20">
        <img
          src="/images/team3.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Shadow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/50 to-transparent z-10"></div>

      {/* Extra Shape Decorations */}
      <div className="absolute top-[-30px] left-[-30px] w-[100px] h-[100px] rounded-full bg-white opacity-20 z-10"></div>
    </div>
  );
};

export default ProfileCard;
