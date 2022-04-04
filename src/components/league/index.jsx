function League(props) {
  return (
    <div className="League">
      {props.czempion.name}
      {props.czempion.ability}
    </div>
  );
}

export default League;
