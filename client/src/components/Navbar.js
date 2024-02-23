import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

export function Navbar() {
	return (
		<Breadcrumb>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/formation">Formation</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/experience">Expérience</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/competences">Compétences</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/autres">Autres</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}
