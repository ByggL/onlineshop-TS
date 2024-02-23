import React from "react";
import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

export function CategoryDivider(props) {
	return (
		<Box position="relative" padding="10">
			<Divider size="2xl" />
			<AbsoluteCenter
				bg="white"
				px="4"
				fontSize="xxx-large"
				fontWeight="bold"
				fontFamily="Liberation Mono">
				{props.name}
			</AbsoluteCenter>
		</Box>
	);
}
