export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button onClick={onClick}>
      <img style={{ height: 175 }} src={image} alt="button" />
    </button>
  );
}
type ImageButtonProps = {
  image: string;
  onClick: () => void;
};
