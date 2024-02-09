import { BUTTON_COLOR, BUTTON_HOVER_COLOR } from "@/app/constants";

interface Params {
  text: string;
  marginTop?: string;
  sound?: string;
}

const SubmitButton = ({ text, sound = "button-click" }: Params) => {
  return (
    <button
      type="submit"
      className={`${BUTTON_COLOR} ${BUTTON_HOVER_COLOR} w-1/5 self-center p-3 rounded-xl text-white transition cursor-pointer fixed bottom-14`}
      onClick={() => {
        playSfx(sound);
      }}
    >
      {text}
    </button>
  );
};

export const playSfx = (sound: string = "button-click") => {
  const audio = new Audio(`./sfx/${sound}.mp3`);
  audio.play();
};

export default SubmitButton;
