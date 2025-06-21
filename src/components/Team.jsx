function Team({ team, selectCard }) {
  return (
    <button>
      <article
        className={`size-15 sm:size-20 ${
          team.win
            ? "bg-green-300 border-green-400 hover:border-green-500 cursor-no-drop"
            : "bg-white border-gray-300 hover:border-gray-500 cursor-pointer"
        } p-2 rounded-md sm:rounded-xl border-2 ${
          team.selected && "scale-110 sm:scale-105 border-gray-500"
        } transition-scale duration-150`}
        onClick={() => selectCard(team)}
      >
        <img
          src={team.image}
          alt={team.name}
          className={`size-full object-contain ${
            team.selected || team.win ? "block" : "hidden"
          }`}
          loading="lazy"
        />
      </article>
    </button>
  );
}

export default Team;
