function RenderNames(props) {
  return props.names
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((v, i) => {
      return (
        <p key={i} className={v.sex}>
          {v.name}
        </p>
      );
    });
}


export default RenderNames;