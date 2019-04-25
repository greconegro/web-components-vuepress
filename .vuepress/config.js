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
    head:[
         [
            'script',{
             src:'https://code.jquery.com/jquery-3.4.0.min.js'
             }
         ],
         [
           'script',{
            src:'https://unpkg.com/@alex-arriaga/stencil-webtraining-components@0.0.2/dist/webtraining-components-demo.js'
            }
         ],
         [
            'link',{   
                rel:'stylesheet',
                href:'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 
            }
          ], 
    ],
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

