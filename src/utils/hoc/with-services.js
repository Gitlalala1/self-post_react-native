import React from "react";

import { ServiceConsumer } from "../context/context";

export default WithServices = () => (Wrap) => {
	return (props) => {
		return (
			<ServiceConsumer>
				{(services) => {
					return <Wrap {...props} services={services} />;
				}}
			</ServiceConsumer>
		);
	};
};
