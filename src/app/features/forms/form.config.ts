export const FormsRoutes = {
    routes: {
        heroInfo: "heroInfo",
        heroFiles: "heroFiles",
        heroContact: "heroContact"

    },
    titles: {
        heroInfo: "Hero Info",
        heroFiles: "Hero Files",
        heroContact: "Hero Contact"

    }
}

export const FormsSteps = [
    {
        title: FormsRoutes.titles.heroInfo,
        route: FormsRoutes.routes.heroInfo
    },
    {
        title: FormsRoutes.titles.heroContact,
        route: FormsRoutes.routes.heroContact
    },
    {
        title: FormsRoutes.titles.heroFiles,
        route: FormsRoutes.routes.heroFiles
    }
];