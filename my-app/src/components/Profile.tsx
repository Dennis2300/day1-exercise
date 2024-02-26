
export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
  return (
    <div style={{ border: "1px solid #000", padding: 10, margin: 10, width: singleLine ? "50%" : "auto" }}>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Status: {isActive ? "Active ✅" : "Inactive ❌"}</p>
    </div>
  );
}

type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine: boolean;
};
