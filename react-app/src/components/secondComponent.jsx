export default function SecondComponent(props) {
  console.log(props)
  return (
    <>
      <div>SecondComponent</div>
      <div>{props}</div>
    </>
  );
}
