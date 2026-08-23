interface ServiceMeta {
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
}

const services: ServiceMeta[] = [
    {
        slug: "revisiones-dentales",
        title: "Revisiones Dentales",
        shortDescription: "Revisión, estudio radiográfico y presupuesto totalmente gratuitos.",
        image: "https://static.wixstatic.com/media/d47f72_58d407acbe4e47c5b3a37110e6532bb1~mv2.jpg/v1/fill/w_400,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d47f72_58d407acbe4e47c5b3a37110e6532bb1~mv2.jpg",
    },
    {
        slug: "medicina-estetica",
        title: "Medicina Estética",
        shortDescription: "Rejuvenecimiento facial, tratamiento de arrugas y aumento de labios.",
        image: "https://static.wixstatic.com/media/d47f72_69631898962e4582a00520badd9d366a~mv2.jpg/v1/fill/w_400,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d47f72_69631898962e4582a00520badd9d366a~mv2.jpg",
    },
    {
        slug: "blanqueamiento-dental",
        title: "Blanqueamiento Dental",
        shortDescription: "Aclara el tono natural de tu sonrisa con un gel profesional supervisado.",
        image: "https://static.wixstatic.com/media/d47f72_d531ca276c3d4e7f815e860b8b547db4~mv2.png/v1/fill/w_400,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d47f72_d531ca276c3d4e7f815e860b8b547db4~mv2.png",
    },
    {
        slug: "limpieza-bucal",
        title: "Limpieza Bucal",
        shortDescription: "Elimina el sarro y la placa bacteriana con ultrasonidos y pulido.",
        image: "https://static.wixstatic.com/media/d47f72_19a34f9516a64c46868fa4c2d1283d34~mv2.png/v1/fill/w_400,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d47f72_19a34f9516a64c46868fa4c2d1283d34~mv2.png",
    },
];

const defaultServiceSlug = services[0].slug;

export type { ServiceMeta };
export { services, defaultServiceSlug };
