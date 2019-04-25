# Coutries Finder


<CountriesFinderWrapper/>

::: tip What is this about?
Use this component to find coutries
:::

::: danger What is this about?
Use this component to find coutries
:::

::: warning What is this about?
Use this component to find coutries
:::
``` js {4,5}
module.exports = {
    title:'An amazing library',
    description:'This is a great tool',
    themeConfig:{
        logo:'/assets/img/logo.png',
        nav:[
            {text:'home',link:'/'},
            {text:'Patterns', link: '/patterns/'},
            {text:'linkedin', link:'https://www.linkedin.com/in/miguel-angel-jimenez-velez-b1b30129/'},
        ],
        sidebar:{
            '/patterns/':getPatternsSidebar(),
        },
    },
};

function getPatternsSidebar(){
    return[
        {
          'title':'Web Components',
            'collapsable': false,
            children:[
                'CountriesFinder'
            ]
        },
    ];
}



```