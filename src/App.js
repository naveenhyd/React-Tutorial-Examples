import React from 'react';
import './App.css';
// import Counter from './components/Counter';
// import Welcome from './components/Welcome';
// import Greet from './components/Greet';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';

function App() {
	return (
		<div className="App">
			
			<ParentComponent />
			
			{/* <FunctionClick /> */}

			{/* <Message /> */}
			{/* <Greet name="Naveen 1" age="12">
				<p>this is paragraph</p>
			</Greet>
			<Greet name="Naveen 2" age="42" /> 
			<Welcome name='Naveen 1' />
			<Welcome name='Naveen 2' />
			<Greet name="Naveen 2" age="42" />
	*/}

		</div>
	);
}

export default App;
