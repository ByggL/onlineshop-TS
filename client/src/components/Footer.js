import { Box, Center, HStack } from "@chakra-ui/react";
import React from "react";

export function Footer() {
	return (
		<footer>
			<Box bg="#CF3333" padding="5px">
				<HStack></HStack>
				<Center>© 2024 Samuel Léobon, All Rights Reserved</Center>{" "}
				<br />
				<Center>Powered by : React, Chakra UI, Express</Center>
			</Box>
		</footer>
	);
}
