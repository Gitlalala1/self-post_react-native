export default compose =
	(...func) =>
	(component) => {
		return func.reduceRight((prevResult, func) => {
			return func(prevResult);
		}, component);
	};
