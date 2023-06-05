"use strict";

( ( window ) =>
{
    ////    GENERAL FUNCTIONS   ////////////////////////////

    let upperFirstLetter = ( value ) => value.charAt ( 0 ).toUpperCase ( ) + value.substring ( 1 );


    ////    SETTERS     ////////////////////////////////////

    function _setHeader ( )
    {
        let HEADER = window.VARIABLES.header;

        ////////////////////////////////////

        let html = document.getElementsByTagName ( 'header' ) [ 0 ].innerHTML;


            for ( let key in HEADER )

                html = html.replace ( new RegExp ( `{{${key}}}` ), HEADER [ key ] );


            document.getElementsByTagName ( 'header' ) [ 0 ].innerHTML = html;
    }

    function _setEducation ( )
    {
        let EDUCATION = window.VARIABLES.education;

        ////////////////////////////////////

        let icons =
        {
            degree:     'mortarboard',
            school:     'bank',
            timespan:   'calendar-week',
            location:   'geo'
        }

        let html  = '';


        for ( let entry in EDUCATION )
        {
            let tag_ol = '';


            for ( let value in EDUCATION [ entry ] )

                tag_ol += `\n\t<li>${EDUCATION [ entry ] [ value ]} <span class="icon ${icons [ value ]}">&nbsp;</span></li>`;


            html += `<ol>${tag_ol}\n</ol>\n`
        }


        document.getElementById ( 'education' ).innerHTML = `<h1>Education</h1>\n\n${html}`;
    }

    function _setSkills ( )
    {
        let SKILLS = window.VARIABLES.skills;

        ////////////////////////////////////

        let icons =
        {
            languages:  'braces-asterisk',
            frameworks: 'boxes',
            ancillary:  'box'
        }

        let html  = ''


        for ( let arts in SKILLS )
        {
            let h2_tag = `<h2>${upperFirstLetter ( arts )}</h2>`;

            let tag_ol = '';


            for ( let art of SKILLS [ arts ] )

                tag_ol += `\n\t<li>${art} <span class="icon dot">&nbsp;</span></li>`;


            html += `<h2>${upperFirstLetter ( arts )} <span class="icon ${icons [arts]}">&nbsp;</span></h2>\n\n<ol>${tag_ol}\n</ol>\n\n`
        }


        document.getElementById ( 'skills' ).innerHTML = `<h1>Skills</h1>\n\n${html}`;
    }

    function _setProjects ( )
    {
        let PROJECTS = window.VARIABLES.projects;

        ////////////////////////////////////

        let html = '';


        for ( let project in PROJECTS )

            html += `\n\t<li>${PROJECTS [ project ]} <span class="icon github">&nbsp;</span></li>`;


        document.getElementById ( 'projects' ).innerHTML = `<h1>Projects</h1>\n\n<ol>${html}\n</ol>\n`;
    }

    function _setExperiences ( )
    {
        let EXPERIENCES = window.VARIABLES.experiences;

        ////////////////////////////////////

        let icons  =
        {
            role:       'briefcase',
            timespan:   'calendar-week',
            business:   'buildings',
            location:   'geo'
        }

        let html  = ''


        for ( let experience in EXPERIENCES )
        {
            let region =
            {
                left:
                [
                    'role',
                    'timespan'
                ],
                html:
                {
                    sides:
                    {
                        left:  '',
                        right: '',
                    },
                    duties: ''
                }
            }


            ////    .details

            for ( let detail in EXPERIENCES [ experience ] [ 'details' ] )
            {
                ( region.left.includes ( detail ) )

                    ? region.html.sides.left  += `\n\n\t\t\t<div class="${detail}"><span class="icon ${icons [ detail ]}">&nbsp;</span> ${EXPERIENCES [ experience ] [ 'details' ] [ detail ]}</div>`

                    : region.html.sides.right += `\n\n\t\t\t<div class="${detail}"><span class="icon ${icons [ detail ]}">&nbsp;</span> ${EXPERIENCES [ experience ] [ 'details' ] [ detail ]}</div>`;
            }


            ////    .left & .right

            for ( let side in region.html.sides )

                region.html [ side ] = `\n\n\t\t<div class="${side}">${region.html.sides [ side ]}\n\n\t\t</div>`;


            ////    .duties

            for ( let duty in EXPERIENCES [ experience ] [ 'duties' ] )

                region.html.duties += `\n\t\t<li>${EXPERIENCES [ experience ] [ 'duties' ] [ duty ]}</li>`


            region.html.duties = `\t<ul>${region.html.duties}\n\t</ul>`;


            ////    RESULT      ////////////////////////////////

            html += `\n\n<div class="job">\n\n\t<div class="details">${region.html.left + region.html.right}\n\n\t</div>\n\n${region.html.duties}\n\n</div>`;
        }


        document.getElementById ( 'experience' ).innerHTML = `<h1>Work Experience</h1>${html}`;
    }

    function _setFooter ( )
    {
        let FOOTER = window.VARIABLES.footer;

        let html   = `\n\n<span><span class="icon person">&nbsp;</span> ${FOOTER.name}</span>`    +
                     `\n<span>${FOOTER.email}</span>\n`                                           +
                     `\n<span>${FOOTER.location} <span class="icon geo">&nbsp;</span></span>\n\n`


        document.getElementsByTagName ( 'footer' ) [ 0 ].innerHTML = html
    }


    ////    INIT    ////////////////////////////////////////

    function init ( )
    {
        _setHeader      ( );
        _setEducation   ( );
        _setSkills      ( );
        _setProjects    ( );
        _setExperiences ( );
        _setFooter      ( );
    }

    ////    INIT    ////////////////////////////////////////

    if ( typeof ( window.VARIABLES ) != 'undefined' )

        init ( );


} ) ( window );
