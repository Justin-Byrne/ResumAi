"use strict";

( ( window ) =>
{
    let _header =
    {
        name:       'Justin D. Byrne',
        title:      'Web & Software Engineer',
        email:      'justin@byrne-systems.com',
        phone:      '(714) 497-6726',
        location:   'Bremerton, WA',
        website:    'www.byrne-systems.com'
    }

    let _education =
    [
        {
            degree:     'B.S. Computer Science',
            school:     'University of Olympia',
            timespan:   'Sept. 2008 - April 2012',
            location:   'Pomona, CA'
        }
    ]

    let _skills =
    {
        languages:
        [
            'C',
            'C++',
            'JavaScript'
        ],
        frameworks:
        [
            '.net',
            'lib',
            'yourMom'
        ],
        ancillary:
        [
            'mySQL',
            'fuckYou',
            'fuckYou2'
        ]
    }

    let _projects =
    [
        'ClassGenerator',
        'Entity-Simulation',
        'SacredGeometry'
    ]

    let _experiences =
    [
        {
            details:
            {
                role:       'Software Developer / Dev Ops 1',
                timespan:   'Jan. 2015 - Present',
                business:   'PriceSpider',
                location:   'Irvine, CA',
            },
            duties:
            [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.'
            ]
        },
        {
            details:
            {
                role:       'Software Developer / Dev Ops 2',
                timespan:   'Jan. 2015 - Present',
                business:   'PriceSpider',
                location:   'Irvine, CA',
            },
            duties:
            [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.'
            ]
        },
        {
            details:
            {
                role:       'Software Developer / Dev Ops 3',
                timespan:   'Jan. 2015 - Present',
                business:   'PriceSpider',
                location:   'Irvine, CA',
            },
            duties:
            [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Laoreet non curabitur gravida arcu ac. Gravida none arcu ac.'
            ]
        },
    ]

    let _footer =
    {
        name:       _header.name,
        email:      _header.email,
        location:   _header.location
    }

    function _setVariables ( )
    {
        let _text =
        {
            header:      _header,
            education:   _education,
            skills:      _skills,
            projects:    _projects,
            experiences: _experiences,
            footer:      _footer
        }

        return _text;
    }


    ////    INIT    ////////////////////////////////////////

    if ( typeof ( window.VARIABLES ) === 'undefined' )

        window.VARIABLES = _setVariables ( );


} ) ( window );
