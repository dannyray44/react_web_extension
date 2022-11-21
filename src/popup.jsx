import React from "react";
// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';

function Popup() {
	return (
		<div>
			<h1>Hello world!!</h1>
			<p>This is a simple popup!</p>
		</div>
	);
}

// render(<Popup />, document.getElementById("react-target"));

const container = document.getElementById("react-target");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Popup />);
