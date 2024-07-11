interface TitleParams {
  text: string;
  size?: string;
}
export const Title = ({ text, size = "4xl" }: TitleParams) => {
  return (
    <h1 className={`text-${size} cursor-default my-5 self-center`}>{text}</h1>
  );
};
