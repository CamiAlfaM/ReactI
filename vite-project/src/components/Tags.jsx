import Badge from "react-bootstrap/Badge";

function Tags(promp) {
  return (
    <>
      <Badge bg={promp.color}>{promp.text}</Badge>
    </>
  );
}
export default Tags;


