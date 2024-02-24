import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

function Navbar() {
	return (
		<Breadcrumb>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/cars">Cars</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/parts">Parts</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}

export default Navbar;