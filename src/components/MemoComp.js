import React from "react";

function MemoComp(props) {
	console.log("MemoComp");
	// console.log(props)
	return <div>{props.name}</div>;
}

export default React.memo(MemoComp);
