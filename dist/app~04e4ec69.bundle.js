(()=>{"use strict";var n,t={756:(n,t,A)=>{A.d(t,{Z:()=>m});var e=A(537),i=A.n(e),r=A(645),o=A.n(r),a=A(667),C=A.n(a),l=new URL(A(594),A.b),p=new URL(A(308),A.b),s=o()(i()),d=C()(l),g=C()(p);s.push([n.id,"/* font-family: 'Alata', sans-serif;\nfont-family: 'Josefin Sans', sans-serif; */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tbackground-color: #c5c5c5;\n\tline-height: 1;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: black;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\tmin-height: 100vh;\n}\n\n.error-message {\n\tfont-weight: 600;\n}\n\n.open {\n\tdisplay: block !important;\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: #bf1722;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n\n.hero-section {\n    background-image: url("+d+");\n    height: 17rem;\n    background-size: cover;\n}\n\nheader {\n    position: relative;\n    color: white;\n    font-family: 'Josefin Sans', sans-serif;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    align-items: center;\n}\n\nheader > h1 {\n    font-size: 30px;\n    color: white;\n    font-family: 'Alata', sans-serif;\n}\n\n#mobile-navigation {\n\twidth: 45px;\n\theight: 45px;\n\tline-height: 45px;\n\tbackground-color: transparent;\n\tborder: 0;\n\tpadding-right: 20px;\n\tpadding-left: 20px;\n}\n\n.overlay {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.75);\n    position: fixed;\n    height: 100%;\n    z-index: 8;\n\t\ttop: 0;\n    width: 100%;\n}\n\n#mobile-drawer {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 100%;\n    padding: 20px;\n    padding-top: 30px;\n    width: 55%;\n    left: 50%;\n    position: relative;\n    z-index: 10;\n    animation: animationMenu 650ms;\n    gap: 20px;\n}\n\n#mobile-drawer > a {\n    font-family: 'Josefin Sans', sans-serif;\n    text-decoration: none;\n    font-size: 18px;\n}\n\n#mobile-drawer > svg {\n    width: 20px;\n    margin-left: 35vw;\n}\n\n.mobile-drawer__navigation {\n\theight: 45px;\n\tline-height: 45px;\n}\n\n#close-button {\n    display: block;\n    background: none;\n    border: none;\n    width: 44px;\n    margin-left: calc(100% - 6.7rem);\n}\n\nspan {\n    color: #CEC364;\n}\n\n#hamburger {\n    width: 1.7rem;\n    fill: white;\n}\n\n/* main  */\n\nmain {\n    padding: 35px;\n    background-color: #c5c5c5;\n}\n\n#title-restaurant {\n    text-align: center;\n    font-family: 'Alata', sans-serif;\n    font-weight: 300;\n    font-size: 21px;\n    letter-spacing: 7px;\n    line-height: 32px;\n    width: 100%;\n    display: block;\n    margin: auto;\n    margin-bottom: 25px;\n}\n\n.resto-wrapper {\n    display: grid;\n    gap: 45px;\n    grid-template-columns: 1fr;\n}\n\n.resto-wrapper__item {\n    background-color: #f3f3f3;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.resto-image {\n    background-repeat: no-repeat;\n    height: 14rem;\n    position: relative;\n    background-size: cover;\n}\n\n.resto-image::before{\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(70, 56, 29, 0.5), rgba(10, 9, 9, 0.7));\n}\n\n.img-custom {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.rating {\n\tbackground-color: white;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 10px;\n\tpadding-left: 17px;\n\tgap: 6px;\n\tposition: absolute;\n\tmax-width: 55px;\n\tborder-radius: 10px 0px 20px 0px;\n\ttop: 0;\n}\n\n.rating > img {\n    width: 20px;\n}\n\n.rating > p {\n    font-size: 20px;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.resto-image__title > p {\n    font-size: 35px;\n    position: absolute;\n    bottom: 16px;\n    left: 25px;\n    color: aliceblue;\n    -webkit-text-stroke-width: 0px;\n    -webkit-text-stroke-color: black;\n    font-weight: 300;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.description-resto {\n    font-family: 'Josefin Sans', sans-serif;\n    padding: 30px;\n    line-height: 23px;\n    padding-bottom: 25px;\n    padding-top: 25px;\n}\n\n.description-resto__city {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-weight: bold;\n}\n\n.description-resto__teks {\n    font-weight: 400;\n    font-size: 14px;\n    text-align: left;\n}\n\n.resto-item-detail {\n\tdisplay: flex;\n\tgap: 20px;\n\tjustify-content: center;\n\tflex-direction: column;\n}\n\n.resto-item-detail__image {\n\twidth: 100%;\n\theight: 300px;\n\tflex-basis: 50%;\n\tobject-fit: cover;\n\tmargin: auto;\n}\n\n.resto-item-detail__desc {\n\tflex-basis: 50%;\n}\n\n.resto-item-detail__desc > li > span {\n\tcolor: black;\n}\n\n.menu-makanan, .menu-minuman {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 10px;\n\tmargin-bottom: 1rem;\n\tmargin-top: 1rem;\n}\n\n.menu-makanan__item, .menu-minuman__item {\n\tbackground-color: #CEC364;\n\tpadding: 7px;\n\tborder-radius: 7px;\n\ttext-align: center;\n\tcolor: black;\n\tborder: 1px solid black;\n}\n\n.title-categories {\n\tfont-weight: 600;\n}\n\n.like-button {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #68359c;\n\tpadding: 1rem;\n\tdisplay: block;\n\twidth: 64px;\n\tmargin-left: auto;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: white;\n\tborder: 1px solid black;\n\tmargin: 0.5rem;\n}\n\n.unlike-button {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #68359c;\n\tpadding: 1rem;\n\tdisplay: block;\n\twidth: 64px;\n\tmargin-left: auto;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: white;\n\tborder: 1px solid black;\n\tmargin: 0.5rem;\n}\n\n.like-button:hover, .unlike-button:hover {\n\tcursor: pointer;\n}\n\ntextarea {\n\twidth: 100%;\n}\n\n.title-review {\n\tfont-weight: 600;\n\ttext-align: center;\n\tmargin-bottom: 1.5rem;\n\tborder-bottom: 1px solid;\n\tpadding-bottom: 1rem;\n\tmargin-top: 2rem;\n}\n\n.review-wrapper {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 20px;\n\tmargin-bottom: 2rem;\n}\n\n\n.review-items {\n\tbackground-color: #CEC364;\n\tpadding: 8px;\n\tborder: 1px solid black;\n\tborder-radius: 7px;\n}\n\n.review-items__name {\n\tfont-weight: 600;\n\n}\n\n.review-items__date {\n\t\n}\n\n.favorite-resto-wrapper__heading {\n\ttext-align: center;\n\tfont-family: 'Alata', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 21px;\n\tletter-spacing: 7px;\n\tline-height: 32px;\n\twidth: 100%;\n\tdisplay: block;\n\tmargin: auto;\n\tmargin-bottom: 25px;\n}\n\n.fav-resto {\n\tdisplay: grid;\n\tgap: 45px;\n\tgrid-template-columns: 1fr;\n}\n\nfooter {\n\tfont-family: 'Josefin Sans', sans-serif;\n\ttext-align: center;\n\tpadding: 10px;\n\tbackground-color: #c5c5c5;\n\tfont-size: 15px;\n}\n\n@media only screen and (min-width:320px) {\n    #desktop-navigation {\n        display: none;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .hero-section {\n\t\t\t\tbackground-image: url("+g+");\n        height: 25rem;\n    }\n\n    header {\n        padding: 40px;\n        padding-left: 50px;\n        padding-right: 50px;\n    }\n\n    #mobile-navigation {\n        display: none;\n    }\n\n    #desktop-navigation {\n        display: flex;\n        gap: 30px;\n    }\n\n    #desktop-navigation > a {\n        font-size: 18px;\n\t\t\t\theight: 45px;\n\t\t\t\tline-height: 45px;\n        color: white;\n        text-decoration: none;\n    }\n\n    .resto-wrapper {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #title-restaurant {\n        margin-bottom: 40px;\n    }\n\n\t\t.resto-item-detail {\n\t\t\tflex-direction: row;\n\t\t\tmargin-left: 2rem;\n\t\t\tmargin-right: 2rem;\n\t\t}\n\n\t\t.review-wrapper {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\t}\n\n\t\t.form-review-wrapper {\n\t\t\tmargin-right: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\n\t\t.title-review {\n\t\t\tmargin-right: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\n\t\t.review-wrapper {\n\t\t\tmargin-right: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\n\t\t.fav-resto {\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t}\n}\n\n@media only screen and (min-width: 1024px) {\n    .resto-wrapper {\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 20px;\n    }\n\n\t\t.review-wrapper {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n\t\t}\n\n\t\t.fav-resto {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\t}\n}\n\n@media only screen and (min-width: 1200px) {\n    .hero-section {\n        min-width: 1000px;\n        height: 32rem;\n    }\n\n    .resto-wrapper {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n    }\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["/* font-family: 'Alata', sans-serif;\nfont-family: 'Josefin Sans', sans-serif; */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tbackground-color: #c5c5c5;\n\tline-height: 1;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: black;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\tmin-height: 100vh;\n}\n\n.error-message {\n\tfont-weight: 600;\n}\n\n.open {\n\tdisplay: block !important;\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: #bf1722;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n\n.hero-section {\n    background-image: url('../../dist/images/hero-image_4-small.jpg');\n    height: 17rem;\n    background-size: cover;\n}\n\nheader {\n    position: relative;\n    color: white;\n    font-family: 'Josefin Sans', sans-serif;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    align-items: center;\n}\n\nheader > h1 {\n    font-size: 30px;\n    color: white;\n    font-family: 'Alata', sans-serif;\n}\n\n#mobile-navigation {\n\twidth: 45px;\n\theight: 45px;\n\tline-height: 45px;\n\tbackground-color: transparent;\n\tborder: 0;\n\tpadding-right: 20px;\n\tpadding-left: 20px;\n}\n\n.overlay {\n    display: none;\n    background-color: rgba(0, 0, 0, 0.75);\n    position: fixed;\n    height: 100%;\n    z-index: 8;\n\t\ttop: 0;\n    width: 100%;\n}\n\n#mobile-drawer {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    height: 100%;\n    padding: 20px;\n    padding-top: 30px;\n    width: 55%;\n    left: 50%;\n    position: relative;\n    z-index: 10;\n    animation: animationMenu 650ms;\n    gap: 20px;\n}\n\n#mobile-drawer > a {\n    font-family: 'Josefin Sans', sans-serif;\n    text-decoration: none;\n    font-size: 18px;\n}\n\n#mobile-drawer > svg {\n    width: 20px;\n    margin-left: 35vw;\n}\n\n.mobile-drawer__navigation {\n\theight: 45px;\n\tline-height: 45px;\n}\n\n#close-button {\n    display: block;\n    background: none;\n    border: none;\n    width: 44px;\n    margin-left: calc(100% - 6.7rem);\n}\n\nspan {\n    color: #CEC364;\n}\n\n#hamburger {\n    width: 1.7rem;\n    fill: white;\n}\n\n/* main  */\n\nmain {\n    padding: 35px;\n    background-color: #c5c5c5;\n}\n\n#title-restaurant {\n    text-align: center;\n    font-family: 'Alata', sans-serif;\n    font-weight: 300;\n    font-size: 21px;\n    letter-spacing: 7px;\n    line-height: 32px;\n    width: 100%;\n    display: block;\n    margin: auto;\n    margin-bottom: 25px;\n}\n\n.resto-wrapper {\n    display: grid;\n    gap: 45px;\n    grid-template-columns: 1fr;\n}\n\n.resto-wrapper__item {\n    background-color: #f3f3f3;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.resto-image {\n    background-repeat: no-repeat;\n    height: 14rem;\n    position: relative;\n    background-size: cover;\n}\n\n.resto-image::before{\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(70, 56, 29, 0.5), rgba(10, 9, 9, 0.7));\n}\n\n.img-custom {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.rating {\n\tbackground-color: white;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 10px;\n\tpadding-left: 17px;\n\tgap: 6px;\n\tposition: absolute;\n\tmax-width: 55px;\n\tborder-radius: 10px 0px 20px 0px;\n\ttop: 0;\n}\n\n.rating > img {\n    width: 20px;\n}\n\n.rating > p {\n    font-size: 20px;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.resto-image__title > p {\n    font-size: 35px;\n    position: absolute;\n    bottom: 16px;\n    left: 25px;\n    color: aliceblue;\n    -webkit-text-stroke-width: 0px;\n    -webkit-text-stroke-color: black;\n    font-weight: 300;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.description-resto {\n    font-family: 'Josefin Sans', sans-serif;\n    padding: 30px;\n    line-height: 23px;\n    padding-bottom: 25px;\n    padding-top: 25px;\n}\n\n.description-resto__city {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-weight: bold;\n}\n\n.description-resto__teks {\n    font-weight: 400;\n    font-size: 14px;\n    text-align: left;\n}\n\n.resto-item-detail {\n\tdisplay: flex;\n\tgap: 20px;\n\tjustify-content: center;\n\tflex-direction: column;\n}\n\n.resto-item-detail__image {\n\twidth: 100%;\n\theight: 300px;\n\tflex-basis: 50%;\n\tobject-fit: cover;\n\tmargin: auto;\n}\n\n.resto-item-detail__desc {\n\tflex-basis: 50%;\n}\n\n.resto-item-detail__desc > li > span {\n\tcolor: black;\n}\n\n.menu-makanan, .menu-minuman {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 10px;\n\tmargin-bottom: 1rem;\n\tmargin-top: 1rem;\n}\n\n.menu-makanan__item, .menu-minuman__item {\n\tbackground-color: #CEC364;\n\tpadding: 7px;\n\tborder-radius: 7px;\n\ttext-align: center;\n\tcolor: black;\n\tborder: 1px solid black;\n}\n\n.title-categories {\n\tfont-weight: 600;\n}\n\n.like-button {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #68359c;\n\tpadding: 1rem;\n\tdisplay: block;\n\twidth: 64px;\n\tmargin-left: auto;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: white;\n\tborder: 1px solid black;\n\tmargin: 0.5rem;\n}\n\n.unlike-button {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #68359c;\n\tpadding: 1rem;\n\tdisplay: block;\n\twidth: 64px;\n\tmargin-left: auto;\n\tborder-radius: 20px;\n\ttext-align: center;\n\tcolor: white;\n\tborder: 1px solid black;\n\tmargin: 0.5rem;\n}\n\n.like-button:hover, .unlike-button:hover {\n\tcursor: pointer;\n}\n\ntextarea {\n\twidth: 100%;\n}\n\n.title-review {\n\tfont-weight: 600;\n\ttext-align: center;\n\tmargin-bottom: 1.5rem;\n\tborder-bottom: 1px solid;\n\tpadding-bottom: 1rem;\n\tmargin-top: 2rem;\n}\n\n.review-wrapper {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 20px;\n\tmargin-bottom: 2rem;\n}\n\n\n.review-items {\n\tbackground-color: #CEC364;\n\tpadding: 8px;\n\tborder: 1px solid black;\n\tborder-radius: 7px;\n}\n\n.review-items__name {\n\tfont-weight: 600;\n\n}\n\n.review-items__date {\n\t\n}\n\n.favorite-resto-wrapper__heading {\n\ttext-align: center;\n\tfont-family: 'Alata', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 21px;\n\tletter-spacing: 7px;\n\tline-height: 32px;\n\twidth: 100%;\n\tdisplay: block;\n\tmargin: auto;\n\tmargin-bottom: 25px;\n}\n\n.fav-resto {\n\tdisplay: grid;\n\tgap: 45px;\n\tgrid-template-columns: 1fr;\n}\n\nfooter {\n\tfont-family: 'Josefin Sans', sans-serif;\n\ttext-align: center;\n\tpadding: 10px;\n\tbackground-color: #c5c5c5;\n\tfont-size: 15px;\n}\n\n@media only screen and (min-width:320px) {\n    #desktop-navigation {\n        display: none;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .hero-section {\n\t\t\t\tbackground-image: url('../../dist/images/hero-image_4-large.jpg');\n        height: 25rem;\n    }\n\n    header {\n        padding: 40px;\n        padding-left: 50px;\n        padding-right: 50px;\n    }\n\n    #mobile-navigation {\n        display: none;\n    }\n\n    #desktop-navigation {\n        display: flex;\n        gap: 30px;\n    }\n\n    #desktop-navigation > a {\n        font-size: 18px;\n\t\t\t\theight: 45px;\n\t\t\t\tline-height: 45px;\n        color: white;\n        text-decoration: none;\n    }\n\n    .resto-wrapper {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #title-restaurant {\n        margin-bottom: 40px;\n    }\n\n\t\t.resto-item-detail {\n\t\t\tflex-direction: row;\n\t\t\tmargin-left: 2rem;\n\t\t\tmargin-right: 2rem;\n\t\t}\n\n\t\t.review-wrapper {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\t}\n\n\t\t.form-review-wrapper {\n\t\t\tmargin-right: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\n\t\t.title-review {\n\t\t\tmargin-right: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\n\t\t.review-wrapper {\n\t\t\tmargin-right: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\n\t\t.fav-resto {\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t}\n}\n\n@media only screen and (min-width: 1024px) {\n    .resto-wrapper {\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 20px;\n    }\n\n\t\t.review-wrapper {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n\t\t}\n\n\t\t.fav-resto {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\t}\n}\n\n@media only screen and (min-width: 1200px) {\n    .hero-section {\n        min-width: 1000px;\n        height: 32rem;\n    }\n\n    .resto-wrapper {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n    }\n}"],sourceRoot:""}]);const m=s},46:(n,t,A)=>{var e=A(379),i=A.n(e),r=A(795),o=A.n(r),a=A(569),C=A.n(a),l=A(565),p=A.n(l),s=A(216),d=A.n(s),g=A(589),m=A.n(g),c=A(756),B={};B.styleTagTransform=m(),B.setAttributes=p(),B.insert=C().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=d(),i()(c.Z,B),c.Z&&c.Z.locals&&c.Z.locals}},A={};function e(n){var i=A[n];if(void 0!==i)return i.exports;var r=A[n]={id:n,exports:{}};return t[n](r,r.exports,e),r.exports}e.m=t,n=[],e.O=(t,A,i,r)=>{if(!A){var o=1/0;for(p=0;p<n.length;p++){for(var[A,i,r]=n[p],a=!0,C=0;C<A.length;C++)(!1&r||o>=r)&&Object.keys(e.O).every((n=>e.O[n](A[C])))?A.splice(C--,1):(a=!1,r<o&&(o=r));if(a){n.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=n.length;p>0&&n[p-1][2]>r;p--)n[p]=n[p-1];n[p]=[A,i,r]},e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var A in t)e.o(t,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:t[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var A=t.getElementsByTagName("script");A.length&&(n=A[A.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={209:0};e.O.j=t=>0===n[t];var t=(t,A)=>{var i,r,[o,a,C]=A,l=0;if(o.some((t=>0!==n[t]))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(C)var p=C(e)}for(t&&t(A);l<o.length;l++)r=o[l],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(p)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(t.bind(null,0)),A.push=t.bind(null,A.push.bind(A))})(),e.nc=void 0;var i=e.O(void 0,[192,2,17,337,268,924],(()=>e(712)));i=e.O(i)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map