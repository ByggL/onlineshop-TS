const express = require("express");
const app = express();

const infos = {
	formations: [
		{
			name: "Licence Informatique",
			dates: "2021-2024",
			description:
				"L1 Mathématiques-Informatique puis L2-L3 Informatique",
			logo: "https://www.univ-angers.fr/_resource/Documents/DCOM/logo/VERTICAL/PAPIER/JPEG/ua_v_couleur.jpg?download=true",
		},
		{
			name: "Baccalauréat Général",
			dates: "2021",
			description:
				"Spécialités Mathématiques / Numérique et Sciences Informatiques - Mention Bien",
			logo: "https://pbs.twimg.com/profile_images/1060456926063009793/8QS24sxA_400x400.jpg",
		},
		{
			name: "Certification TOEIC",
			dates: "Janvier 2021",
			description: "Score de 980/990 - Niveau C1",
			logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/ETS_Logo.svg/2560px-ETS_Logo.svg.png",
		},
	],
	experience: [
		{
			company: "Angers Loire Habitat",
			jobTitle: "Chargé d’accueil et secrétariat",
			dates: "2 au 25 août 2023",
			logo: "https://baudet-sa.com/wp-content/uploads/2020/12/angers-loire-habitat.png",
		},
		{
			company: "Verisure",
			jobTitle: "Conseiller Technique et Relation Client",
			dates: "13 juin au 19 août 2022",
			description:
				"- Prise en charge et résolution des besoins client\n- Orientation du client vers les services adéquats\n- Manipulations administratives relatives aux besoins client",
			logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Verisure_Logo_-_2021-07-16.png",
		},
	],
	skills: [
		{
			title: "POO",
			list: ["C++", "C#", "Java"],
		},
		{
			title: "Web",
			list: ["HTML/CSS", "JavaScript", "PHP", "Astro", "React"],
		},
		{
			title: "BDD",
			list: ["SQL", "PostgreSQL"],
		},
		{
			title: "Autres",
			list: ["Python", "GitHub"],
		},
	],
	interests: [
		{
			name: "Développement de jeux vidéos en amateur",
		},
		{
			name: "Jeu de rôle sur table en association",
			context: "(Héritiers de Dumnacus)",
		},
		{
			name: "Worldbuilding",
			context: "(projet communautaire The World Beyond The Ice Wall)",
		},
	],
	languages: ["Français natif", "Anglais C2", "Espagnol A2"],
};

app.get("/api", (req: any, res: any) => {
	res.json(infos);
});

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
