export const products = [
    {   
        id : 1,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/userExperience.png?alt=media&token=92feb857-e2c5-4346-a51a-c64ebd0307e4',
        name: 'UX Research',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Diseño',
    },
    {   
        id : 2,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/userInterface.png?alt=media&token=1be4f882-8ee9-4a4b-95d4-f6d5a309dfd1',
        name: 'UX/UI Designer',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Diseño',
    },
    {   
        id : 3,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/htmlLogo.png?alt=media&token=1b030e8a-a65c-46cc-b849-e080abcc0a01',
        name: 'HTML & CSS Course',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Web',
    },
    {   
        id : 4,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/javascriptLogo.png?alt=media&token=7c3d306f-7b25-4ef0-a8c5-933ded0b8df0',
        name: 'Javascript Course',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Web',
    },
    {   
        id : 5,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/reactLogo.png?alt=media&token=3c47dc3a-d774-42cb-91d7-8f4b838ba715',
        name: 'React Course',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Web',
    },
    {   
        id : 6,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/svelteLogo.png?alt=media&token=b8c3ee7b-9510-4c85-bbb0-fcb9e239e6d8',
        name: 'Svelte Course',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Web',
    },
    {   
        id : 7,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/frontendDev.png?alt=media&token=a25dd90c-3c37-4803-9d27-e797ddd8d86f',
        name: 'Frontend Developer Carreer',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Web',
    },
    { 
        id : 8,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/backendDev.png?alt=media&token=18d85e01-eef4-48dc-aa61-131de610cd52',
        name: 'Backend Developer Carreer',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Backend',
    },
    { 
        id : 9,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/sqlLogo.png?alt=media&token=9a71152c-a1e5-473f-9b5e-f43924acaefc',
        name: 'SQL Course',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Desarrollo Backend',
    },
    { 
        id : 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/pythonLogo.png?alt=media&token=4ca6699d-f986-4325-a1d0-ffd842559704',
        name: 'Python Course',
        description: 'Lorem Impsum dolor sit amet consceptuars it all jaesn masjes niptum sala ma lecum',
        category: 'Machine Learning',
    },
]

export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(products)
        }, 2000)
    })
}
export const getProductsFiltered = (category) => {
    return new Promise ((res) => {
        const filteredProducts = products.filter((producto) => producto.category === category)
        setTimeout(() => {
            res(filteredProducts)
        }, 2000)
    })
}