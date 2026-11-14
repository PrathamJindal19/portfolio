interface Image {
    id: number
    source: string
}

interface RealEstate {
    id: number
    heading: string
    desc: string

    images: Image[]

    link: string
}

const realEstate: RealEstate[] = [
    {
        id: 1,
        heading: "A Premium Digital Experience for Real Estate",
        desc: "Designed and developed a luxury real estate website that makes discovering, exploring, and enquiring about private villas feel effortless.",

        images: [
            {
                id: 1,
                source: "/real_estate/propvia/PROPVIA_01.png"
            },
            {
                id: 2,
                source: "/real_estate/propvia/PROPVIA_02.png"
            },
            {
                id: 3,
                source: "/real_estate/propvia/PROPVIA_03.png"
            }
        ],

        link: "https://propvia-xi.vercel.app"
    }
]
export type { RealEstate }
export default realEstate