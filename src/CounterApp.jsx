import { useState } from "react"
import PropTypes from "prop-types"

export const App = ({value}) => {
	const [counter, setCounter] = useState(value)

	const handleSum = () => {
		setCounter(counter + 1)
	}

	const handleRes = () => {
		setCounter(counter - 1)
	}

	const reset = () => {
		setCounter(value)
	}


	return(
		<>
			<h1>CounterApp</h1>
			<p>{counter}</p>
			<button onClick={handleSum}>+1</button>
			<button onClick={handleRes}>-1</button>
			<button onClick={reset}>reset</button>

		</>
	)
}

App.propTypes = {
	value: PropTypes.number.isRequired
}