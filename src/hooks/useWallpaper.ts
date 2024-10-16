export interface Wallpaper {
    url: string;
    name: string;
}
export interface FullWallPaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;

}

export const useLikedWallPapers = () => {
    return useWallpaper().filter((wallpaper) => wallpaper.liked);

}

export const useSuggestedWallPapers = () => {
    return useWallpaper().filter((wallpaper) => wallpaper.suggested);

}

export const useLibraryWallPapers = () => {
    return useWallpaper().filter((wallpaper) => wallpaper.library);
}

export const useWallpaper = (): FullWallPaper[] => {
    return [
        {
            url: "https://images.unsplash.com/photo-1728848112671-25b7758bb168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
            name: "Artistic",
            liked: false,
            suggested: true,
            library: true,
        },
        {
            url: "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Deep Sea Creatures",
            liked: false,
            suggested: true,
            library: true,
        },
        {
            url: "https://images.unsplash.com/photo-1597332419554-26570da5fe75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "AutoMotives",
            liked: true,
            suggested: true,
            library: true,
        },
        {
            url: "https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            name: "Abstract",
            liked: true,
            suggested: false,
            library: false,
        },

        {
            url: "https://images.unsplash.com/photo-1726503015737-43b3d1009351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
            name: "Automobiles",
            liked: false,
            suggested: true,
            library: false,

        },
        {
            url: "https://images.unsplash.com/photo-1728563039608-1de1aa267f38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
            name: "Textures",
            liked: false,
            suggested: false,
            library: true,
        },
        {
            url: "https://images.unsplash.com/photo-1726925793996-8e478b4f99ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
            name: "Minimalistic",
            liked: false,
            suggested: false,
            library: true,
        },
        {
            url: "https://images.unsplash.com/photo-1728485837881-caabb4f8187c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
            name: "Aesthetic",

            liked: true,
            suggested: false,
            library: false,
        },
    ];
};
