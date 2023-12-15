import { Play, Pause } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayBtn({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(
    (state) => state
  );
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400"
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
